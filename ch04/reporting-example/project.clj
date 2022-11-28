(defproject reporting-example "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [compojure "1.6.1"]
                 [hiccup "1.0.5"]
                 [ring-server "0.5.0"] 
                 [postgresql/postgresql "9.1-901.jdbc4"]
                 [org.clojure/java.jdbc "0.2.3"]
                 [clj-pdf "2.6.1"]]
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler reporting-example.handler/app
         :init reporting-example.handler/init
         :destroy reporting-example.handler/destroy}
  :profiles
  {:uberjar {:aot :all}
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}}
   :dev
   {:dependencies [[ring/ring-mock "0.4.0"] [ring/ring-devel "1.7.1"]]}})
