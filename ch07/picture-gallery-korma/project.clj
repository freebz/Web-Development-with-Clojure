(defproject picture-gallery "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [compojure "1.6.1"]
                 [hiccup "1.0.5"]
                 [ring-server "0.5.0"]
                 [postgresql/postgresql "9.1-901.jdbc4"]
                 [org.clojure/java.jdbc "0.2.3"]
                 [lib-noir "0.9.9"]
                 [com.taoensso/timbre "6.0.3"]
                 [selmer "1.12.55"]
                 [ring-middleware-format "0.7.5"]
                 [korma "0.5.0-RC1"]
                 [log4j "1.2.15"
                  :exclusions [javax.mail/mail
                               javax.jms/jms
                               com.sun.jdmk/jmxtools
                               com.sun.jmx/jmxri]]]
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler picture-gallery.handler/app
         :init picture-gallery.handler/init
         :destroy picture-gallery.handler/destroy}
  :profiles
  {:cljs
   {:source-path ["src-cljs"]
    :dependencies [[thheller/shadow-cljs "2.20.14"]]}
   :uberjar {:aot :all}
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}}
   :dev
   {:dependencies [[ring/ring-mock "0.4.0"] [ring/ring-devel "1.7.1"]]}})
