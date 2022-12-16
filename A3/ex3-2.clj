;; Storing Documents

(couch/with-db db
  (couch/put-document {:foo "bar"}))


(couch/with-db db
  (couch/put-document
   {:_id "user" :username "foo" :pass "$dfsdf#23434"}))


(couch/with-db db
  (couch/put-document
   {:_id "user" :_rev "<revision number>" :username "foo" :pass "$dfsdf#23434"}))
