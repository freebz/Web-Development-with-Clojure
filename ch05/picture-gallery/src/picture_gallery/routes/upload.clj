(ns picture-gallery.routes.upload
  (:require [compojure.core :refer [defroutes GET POST]]
            [hiccup.form :refer :all]
            [hiccup.element :refer [image]]
            [hiccup.util :refer [url-encode]]
            [picture-gallery.views.layout :as layout]
            [noir.io :refer [upload-file resource-path]]
            [noir.session :as session]
            [noir.response :as resp]
            [noir.util.route :refer [restricted]]
            [clojure.java.io :as io]
            [ring.util.response :refer [file-response]] 
            [picture-gallery.models.db :as db]
            [picture-gallery.util :refer [galleries gallery-path thumb-prefix thumb-uri]]
            [ring.util.anti-forgery :refer [anti-forgery-field]])
  
  (:import [java.io File FileInputStream FileOutputStream]
           [java.awt.image AffineTransformOp BufferedImage]
           java.awt.RenderingHints
           java.awt.geom.AffineTransform
           javax.imageio.ImageIO))

(defn upload-page [info]
  (layout/common
   [:h2 "Upload an image"]
   [:p info]
   (form-to {:enctype "multipart/form-data"}
            [:post "/upload"]
            (file-upload :file)
            (anti-forgery-field)
            (submit-button "upload"))))

(def thumb-size 150)

(defn scale [img ratio width height]
  (let [scale (AffineTransform/getScaleInstance
               (double ratio) (double ratio))

        transform-op (AffineTransformOp.
                      scale AffineTransformOp/TYPE_BILINEAR)]
    (.filter transform-op img (BufferedImage. width height (.getType img)))))

(defn scale-image [file]
  (let [img        (ImageIO/read file)
        img-width  (.getWidth img)
        img-height (.getHeight img)
        ratio      (/ thumb-size img-height)]
    (scale img ratio (int (* img-width ratio)) thumb-size)))

(defn save-thumbnail [{:keys [filename]}]
  (let [path (str (gallery-path) File/separator)]
    (ImageIO/write
     (scale-image (io/input-stream (str path filename)))
     "jpeg"
     (File. (str path thumb-prefix filename)))))

(defn handle-upload [{:keys [filename] :as file}]
  (upload-page
   (if (empty? filename)
     "please select a file to upload"
     
     (try
       ;;save the file and create the thumbnail
       (upload-file (gallery-path) file)
       (save-thumbnail file)
       (db/add-image (session/get :user) filename)

       ;;display the thumbnail
       (image {:height "150px"}
              (thumb-uri (session/get :user) filename))
       
       (catch Exception ex
         (str "error uploading file " (.getMessage ex)))))))

(defn serve-file [user-id file-name]
  (file-response (str galleries File/separator user-id File/separator file-name)))

(defn delete-image [userid name]
  (try
    (db/delete-image userid name)
    (io/delete-file (str (gallery-path) File/separator name))
    (io/delete-file (str (gallery-path) File/separator thumb-prefix name))
    "ok"
    (catch Exception ex (.getMessage ex))))

(defn delete-images [names]
  (let [userid (session/get :user)]
    (resp/json
     (for [name names] {:name name :status (delete-image userid name)}))))

(defroutes upload-routes
  (GET "/img/:user-id/:file-name" [user-id file-name]
    (serve-file user-id file-name))

  (GET "/upload" [info] (restricted (upload-page info)))

  (POST "/upload" [file] (restricted (handle-upload file)))

  (POST "/delete" [names] (restricted (delete-images names))))
