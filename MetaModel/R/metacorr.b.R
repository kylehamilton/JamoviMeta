
# This file is a generated template, your changes will not be overwritten

MetaCorrClass <- R6::R6Class(
    "MetaCorrClass",
    inherit = MetaCorrBase,
    private = list(
        .run = function() {
          ri <- self$options$rcor
          ni <- self$options$samplesize
          #mods <- self$options$moderatorcor
          #slab <- self$options$studylabels
          fsntype <- self$options$fsntype
          method2 <- self$options$methodmetacor
          cormeasure <- self$options$cormeasure
          #yaxis <- self$options$yaxis
          #data <- self$data
          
          data <- data.frame(ri = self$data[[self$options$rcor]], ni = self$data[[self$options$samplesize]])
          
          data[[ri]] <- jmvcore::toNumeric(data[[ri]])
          data[[ni]] <- jmvcore::toNumeric(data[[ni]])
          
          #newdata <- jmvcore::select(data,c(ri,ni))
          

          res <- metafor::rma(ri=ri, ni=ni, method=method2, measure=cormeasure, data=data)
          
          failsafePB <- metafor::fsn(yi=res$yi, vi=res$vi, type=fsntype)
          ranktestPB <- metafor::ranktest(res)
          regtestPB <- metafor::regtest(res)
          
          self$results$text$setContent(res)
          self$results$fsn$setContent(failsafePB)
          self$results$rank$setContent(ranktestPB)
          self$results$reg$setContent(regtestPB)
          # `self$data` contains the data
          # `self$options` contains the options
          # `self$results` contains the results object (to populate)
          image <- self$results$plot
          imageFUN <- self$results$funplot
          image$setState(res)
          imageFUN$setState(res)
        },
        .plot=function(image, ...) {  # <-- the plot function
          plotData <- image$state
          #yi <- self$options$yi
          #vi <- self$options$vi
          #res <- metafor::rma(yi=yi, vi=vi, data=self$data)
          plot <- metafor::forest(plotData)
          print(plot)
          TRUE
        },
        .funplot=function(imageFUN, ...) {  # <-- the plot function
          plotDataFUN <- imageFUN$state
          yaxis <- self$options$yaxis
          #yi <- self$options$yi
          #vi <- self$options$vi
          #res <- metafor::rma(yi=yi, vi=vi, data=self$data) 
          plotFUN <- metafor::funnel(plotDataFUN, yaxis=yaxis)
          print(plotFUN)
          TRUE
        })
)