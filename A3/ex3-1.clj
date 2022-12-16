;; Using CouchDB

;; Clutch Library

;; Connecting to the Database

(:require [com.ashafa.clutch :as couch])

(def db "http://localhost:5984/clutchtest")

(def db "http://user:pass@localhost:5984/clutchtest")


(def db (assoc (cemerick.url/url "https://localhost:5984/" "clutchtest")
               :username "user"
               :password "pass"))
