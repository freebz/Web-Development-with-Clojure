(ns picture-gallery.routes.example
  (:require [compojure.core :refer :all]
            [selmer.parser :refer [render render-file add-tag!]]
            [selmer.filters :refer [add-filter!]]))

(defn index [request]
  (render-file "example/views/templates/index.html"
               {:name "John"}))

(defn items []
  (render-file "example/views/templates/items.html"
               {:items (range 10)}))

(defn greeting []
  (render "<p>Hello {{user.first}} {{user.last}}</p>"
          {:user {:first "John" :last "Doe"}}))

(add-filter! :empty? empty?)
(defn filter1 []
  (render "{% if files|empty? %}no files{% else %}files{% endif %}"
          {:files []}))

(add-filter! :foo
             (fn [x] [:safe (.toUpperCase x)]))

(defn filter2 []
  (render "{{x|foo}}" {:x "<div>I'm safe</div>"}))

(add-tag!
 :image
 (fn [args context-map]
   (str "<img src=" (first args) "/>")))

(defn tag1 []
  (render "{% image \"http://foo.com/logo.jpg\" %}" {}))

(add-tag! :uppercase
          (fn [args context-map content]
            (.toUpperCase (get-in content [:uppercase :content])))
          :enduppercase)

(defn tag2 []
  (render "{% uppercase %}foo {{bar}} baz{% enduppercase %}" {:bar "injected"}))

(defroutes example-routes
  (GET "/index" [] index)
  (GET "/greeting" [] (greeting))
  (GET "/filter1" [] (filter1))
  (GET "/filter2" [] (filter2))
  (GET "/tag1" [] (tag1))
  (GET "/tag2" [] (tag2)))
