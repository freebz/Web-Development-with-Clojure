;; Writing Code That Writes Code for You

(def session (atom {:user "Bob"}))

(defn load-content []
  (if (:user @session)
    "some content"
    "please log in"))



(defmacro defprivate [name & body]
  `(defn ~(symbol name) []
     (if (:user @session)
       (do ~@body)
       "please log in")))



(macroexpand-1 '(defprivate foo (println "bar")))

;; (clojure.core/defn foo []
;;   (if (:user (clojure.core/deref user/session))
;;     (do (println "bar"))
;;     "please log in"))



(defprivate foo (println "bar"))
