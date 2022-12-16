;; Retrieving a Single Document

(couch/with-db db
  (couch/get-document "user"))


(couch/with-db db
  (let [doc (couch/get-document "user")]
    (couch/put-document
     (assoc doc :username "bar")))
  (println (couch/get-document "user")))
