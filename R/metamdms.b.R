
# This file is a generated template, your changes will not be overwritten

metamdmsClass <- R6::R6Class(
    "metamdmsClass",
    inherit = metamdmsBase,
    private = list(
      .run = function() {
        n1i <- self$options$n1i
        m1i <- self$options$m1i
        sd1i <- self$options$sd1i
        n2i <- self$options$n2i
        m2i <- self$options$m2i
        sd2i <- self$options$sd2i
        mods <- self$options$moderator
        slab <- self$options$slab
        includemods <- self$options$includemods
        addcred <- self$options$addcred
        addfit <- self$options$addfit
        showweights <- self$options$showweights
        level <- self$options$level
        fsntype <- self$options$fsntype
        method2 <- self$options$methodmetamdms
        mdmseasure <- self$options$mdmsmeasure
        yaxis <- self$options$yaxis

        
        if (self$options$includemods == TRUE) {
          data <- data.frame(n1i = self$data[[self$options$n1i]], m1i = self$data[[self$options$m1i]], sd1i = self$data[[self$options$sd1i]], n2i = self$data[[self$options$n2i]],  m2i = self$data[[self$options$m2i]], sd2i = self$data[[self$options$sd2i]], mods = self$data[[self$options$moderator]], slab = self$data[[self$options$slab]])
          data[[n1i]] <- jmvcore::toNumeric(data[[n1i]])
          data[[m1i]] <- jmvcore::toNumeric(data[[m1i]])
          data[[sd1i]] <- jmvcore::toNumeric(data[[sd1i]])
          data[[n2i]] <- jmvcore::toNumeric(data[[n2i]])
          data[[m2i]] <- jmvcore::toNumeric(data[[m2i]])
          data[[sd2i]] <- jmvcore::toNumeric(data[[sd2i]])
          data[[mods]] <- jmvcore::toNumeric(data[[mods]])
        } else {
          data <- data.frame(n1i = self$data[[self$options$n1i]], m1i = self$data[[self$options$m1i]], sd1i = self$data[[self$options$sd1i]], n2i = self$data[[self$options$n2i]], m2i = self$data[[self$options$m2i]], sd2i = self$data[[self$options$sd2i]], slab = self$data[[self$options$slab]])
          data[[n1i]] <- jmvcore::toNumeric(data[[n1i]])
          data[[m1i]] <- jmvcore::toNumeric(data[[m1i]])
          data[[sd1i]] <- jmvcore::toNumeric(data[[sd1i]])
          data[[n2i]] <- jmvcore::toNumeric(data[[n2i]])
          data[[m2i]] <- jmvcore::toNumeric(data[[m2i]])
          data[[sd2i]] <- jmvcore::toNumeric(data[[sd2i]])
        }
        
        
        if (self$options$includemods == TRUE) {
          res <- metafor::rma(n1i=n1i, n2i=n2i, m1i=m1i, m2i=m2i, sd1i=sd1i, sd2i=sd2i, mods=mods, method=method2, measure=mdmseasure, data=data, slab=slab, level=level)
        } else {
          res <- metafor::rma(n1i=n1i, n2i=n2i, m1i=m1i, m2i=m2i, sd1i=sd1i, sd2i=sd2i, method=method2, measure=mdmseasure, data=data, slab=slab, level=level)
        }
        
        
        
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
        slab <- self$options$slab
        addcred <- self$options$addcred
        addfit <- self$options$addfit
        level <- self$options$level
        showweights <- self$options$showweights
        #plot <- metafor::forest(plotData$yi, plotData$vi, addcred=addcred, addfit=addfit)
        plot <- metafor::forest(plotData, addcred=addcred, addfit=addfit, level=level, showweights=showweights)
        #plot <- metafor::forest(plotData$yi, plotData$vi, addcred=addcred, addfit=addfit, level=level, showweights=showweights)
        print(plot)
        TRUE
      
      },
       .funplot=function(imageFUN, ...) {  # <-- the plot function
         plotDataFUN <- imageFUN$state
         yaxis <- self$options$yaxis
         plotFUN <- metafor::funnel(plotDataFUN, vi=plotDataFUN$vi, yaxis=yaxis)
         print(plotFUN)
         TRUE
       }))