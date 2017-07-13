
# This file is a generated template, your changes will not be overwritten

MetaModelClass <- R6::R6Class(
    "MetaModelClass",
    inherit = MetaModelBase,
    private = list(
      .run = function() {
        yi <- self$options$yi
        vi <- self$options$vi
        slab <- self$options$studylabels
        method2 <- self$options$method
        
        res <- metafor::rma(yi=yi, vi=vi, method=method2, data=self$data)
        #print(res)
        self$results$text$setContent(res)

        
        
        
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
        plot <- metafor::forest(plotData)
        print(plot)
        TRUE
      })
)