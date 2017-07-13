
PubBiasClass <- R6::R6Class(
    "PubBiasClass",
    inherit = PubBiasBase,
    private = list(
        .run = function() {
          yi <- self$options$yi
          vi <- self$options$vi
          fsntype <- self$options$fsntype
          res <- metafor::rma(yi=yi, vi=vi, data=self$data)
          failsafePB <- metafor::fsn(yi=yi, vi=vi, data=self$data, type=fsntype)
          ranktestPB <- metafor::ranktest(res)
          regtestPB <- metafor::regtest(res)
          
          
          self$results$fsn$setContent(failsafePB)
          self$results$rank$setContent(ranktestPB)
          self$results$reg$setContent(regtestPB)
          #fpacor <- metafor::ranktest(yi=yi, vi=vi, data=self$data)
          #self$results$text$setContent(fpacor)
          #fpareg regtest(res)
          # `self$data` contains the data
          # `self$options` contains the options
          # `self$results` contains the results object (to populate)
          image <- self$results$plot
          image$setState(res)
        },
        .plot=function(image, ...) {  # <-- the plot function
        plotData <- image$state
        #yi <- self$options$yi
        #vi <- self$options$vi
        #res <- metafor::rma(yi=yi, vi=vi, data=self$data) 
        plot <- metafor::funnel(plotData)
        print(plot)
        TRUE
        })
)