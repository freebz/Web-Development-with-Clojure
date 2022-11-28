(ns reporting-example.models.db
  (:require [clojure.java.jdbc :as sql]))

(def db {:subprotocol "postgresql"
         :subname "//localhost/my_website"
         :user "admin"
         :password "admin"})

(defn create-employee-table []
  (sql/create-table
   :employee
   [:name "varchar(50)"]
   [:occupation "varchar(50)"]
   [:place "varchar(50)"]
   [:country "varchar(50)"]))

;; (sql/with-connection
;;   db
;;   (create-employee-table)
;;   (sql/insert-rows
;;    :employee
;;    ["Albert Einstein", "Engineer", "Ulm", "Germany"]
;;    ["Alfred Hitchcock", "Movie Director", "London", "UK"]
;;    ["Wernher Von Braun", "Rocket Scientist", "Wyrzysk", "Poland"]
;;    ["Sigmund Freud", "Neurologist", "Pribor", "Czech Republic"]
;;    ["Mahatma Gandhi", "Lawyer", "Gujart", "India"]
;;    ["sachin Tendulkar", "Cricket Player", "Mumbai", "India"]
;;    ["Michael Schumacher", "F1 Racer", "Cologne", "Germany"]))

(defn read-employees []
  (sql/with-connection db
    (sql/with-query-results rs ["select * from employee"] (doall rs))))

(read-employees)


;; (defn create-users-table []
;;   (sql/with-connection db
;;     (sql/create-table
;;      :users
;;      [:id "varchar(32) PRIMARY KEY"]
;;      [:pass "varchar(100)"])))

;; (defn get-user [id]
;;   (sql/with-connection db
;;     (sql/with-query-results
;;       res ["select * from users where id = ?"] (first res))))

;; (defn add-user [user]
;;   (sql/with-connection db
;;     (sql/insert-record :users user)))

;; (add-user {:id "foo" :pass "bar"})
