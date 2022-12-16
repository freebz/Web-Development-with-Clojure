;; Using MongoDB

;; Connecting to the Database

(ns mongo-example.core
  (:require [monger.core :as [m]])
  (:import
   org.bson.types.ObjectId
   [com.mongodb MongoOptions]))

;;connects to a local instance
(m/connect!)

;;connect to myhost.com on port 5001
(m/connect! {:host "myhost.com" :port 5001})

;;connect using custom options
(m/connect! (m/server-address "127.0.0.1" 27017)
            (m/mongo-options
             :threads-allowed-to-block-for-connection-multiplier 300))



(defn connect! [& [params]]
  ((partial monger.core/connect!) params)
  (monger.core/set-db! (monger.core/get-db "local")))
