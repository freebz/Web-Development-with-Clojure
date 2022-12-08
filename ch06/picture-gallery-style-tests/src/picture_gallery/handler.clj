(ns picture-gallery.handler
  (:require [compojure.route :as route]
            [compojure.core :refer [defroutes]]
            [noir.session :as session]
            [noir.util.middleware :as noir-middleware] 
            [picture-gallery.routes.home :refer [home-routes]]
            [picture-gallery.routes.auth :refer [auth-routes]]
            [picture-gallery.routes.upload :refer [upload-routes]]
            [picture-gallery.routes.gallery :refer [gallery-routes]]
            [taoensso.timbre :as timbre]
            [com.postspectacular.rotor :as rotor]))

(defn info-appender [{:keys [level message]}]
  (println "level:" level "message:" message))

;; (defn init []
;;   (timbre/set-config! [:timestamp-pattern] "yyyy-MM-dd HH:mm:ss")
;;   (println "picture-gallery is starting"))

;; (defn init []
;;   (timbre/set-config!
;;    [:appenders :info-appender]
;;    {:min-level :info
;;     :enabled? true
;;     :async? false
;;     :max-message-per-msecs 100
;;     :fn info-appender})
;;   (timbre/info "picture-gallery started successfully")) 

(defn init []
  (timbre/set-config!
   [:appenders :rotor]
   {:min-level :info
    :enabled? true
    :async? false ; should be always false for rotor
    :max-message-per-msecs nil
    :fn rotor/append})
  
  (timbre/set-config!
   [:shared-appender-config :rotor]
   {:path "error.log" :max-size (* 512 1024) :backlog 10})
  
  (timbre/info "picture-gallery started successfully"))

(defn destroy []
  (timbre/info "picture-gallery is shutting down"))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defn user-page [_]
  (session/get :user))

(def app (noir-middleware/app-handler
          [auth-routes
           home-routes
           upload-routes
           gallery-routes
           app-routes]
          :access-rules [user-page]))
