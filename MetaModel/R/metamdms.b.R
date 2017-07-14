
# This file is a generated template, your changes will not be overwritten

metamdmsClass <- R6::R6Class(
    "metamdmsClass",
    inherit = metamdmsBase,
    private = list(
      .run = function() {
        n1i <- self$options$N1
        m1i <- self$options$M1
        sd1i <- self$options$SD1
        n2i <- self$options$N2
        m2i <- self$options$M2
        sd2i <- self$options$SD2
        #mods <- self$options$moderatorcor
        #slab <- self$options$studylabels
        fsntype <- self$options$fsntype
        method2 <- self$options$methodmetamdms
        mdmseasure <- self$options$mdmsmeasure
        
        #data <- self$data
        
        data <- data.frame(n1i = self$data[[self$options$N1]], 
                           m1i = self$data[[self$options$M1]],
                           sd1i = self$data[[self$options$SD1]],
                           n2i = self$data[[self$options$N2]], 
                           m2i = self$data[[self$options$M2]],
                           sd2i = self$data[[self$options$SD2]]
                           )
        
        data[[n1i]] <- jmvcore::toNumeric(data[[n1i]])
        data[[m1i]] <- jmvcore::toNumeric(data[[m1i]])
        data[[sd1i]] <- jmvcore::toNumeric(data[[sd1i]])
        data[[n2i]] <- jmvcore::toNumeric(data[[n2i]])
        data[[m2i]] <- jmvcore::toNumeric(data[[m2i]])
        data[[sd2i]] <- jmvcore::toNumeric(data[[sd2i]])
        
        
        res <- metafor::rma(n1i=n1i, n2i=n2i, m1i=m1i, m2i=m2i, sd1i=sd1i, sd2i=sd2i,
                            method=method2, measure=mdmseasure, data=data)
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