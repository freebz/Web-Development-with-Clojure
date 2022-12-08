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
                 [com.taoensso/timbre "2.6.1"]
                 [com.postspectacular/rotor "0.1.0"]
                 [environ "1.2.0"]
                 [http-kit "2.6.0"]]
  :plugins [[lein-ring "0.12.5"]
            [lein-environ "1.2.0"]]
  :ring {:handler picture-gallery.handler/app
         :init picture-gallery.handler/init
         :destroy picture-gallery.handler/destroy}
  :profiles
  {:uberjar {:aot :all
             :env {:port 3000
                   :db-url "//localhost/gallery"
                   :db-user "admin"
                   :db-pass "admin"
                   :galleries-path "galleries"}}
   :production
   {:ring {:open-browser? false,
           :stacktraces? false,
           :auto-reload? false}
    :env {:port 3000
          :db-url "//localhost/gallery"
          :db-user "admin"
          :db-pass "admin"
          :galleries-path "galleries"}}
   :dev
   {:dependencies [[ring/ring-mock "0.4.0"]
                   [ring/ring-devel "1.7.1"]]
    :env {:port 3000
          :db-url "//localhost/gallery"
          :db-user "admin"
          :db-pass "admin"
          :galleries-path "galleries"}}}
  :main picture-gallery.main)
