;; Deleting Documents

(couch/with-db db
  (couch/delete-document "user"))
