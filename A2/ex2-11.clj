;; The :use Keyword

(ns myotherns
  (:use myns))
(say-hello "Bob")



(ns myotherns
  (:use [myns :only [say-hello]]))

(defn print-message [message]
  (println "in myotherns"))

(say-hello)
