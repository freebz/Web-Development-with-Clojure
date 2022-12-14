;; Namespaces

(ns myns)

(defn print-message [message]
  (println "message:" message))

(defn say-hello [user]
  (print-message (str "hello " user)))
