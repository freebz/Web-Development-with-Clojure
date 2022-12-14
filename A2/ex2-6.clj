;; Closures

(defn make-client [url]
  (fn [request] (str "sending " request " to " url)))
(let [client (make-client "http://foo.org")]
  (println (client "request 1"))
  (println (client "request 2")))
