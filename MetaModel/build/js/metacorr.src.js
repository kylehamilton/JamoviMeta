
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"ri","title":"Correlations","type":"Variable"},{"name":"ni","title":"Sample Sizes","type":"Variable"},{"name":"methodmetacor","title":"Model Estimator","type":"List","options":[{"name":"DL","title":"DerSimonian-Laird"},{"name":"HE","title":"Hedges"},{"name":"HS","title":"Hunter-Schmidt"},{"name":"SJ","title":"Sidik-Jonkman"},{"name":"ML","title":"Maximum-Likelihood"},{"name":"REML","title":"Restricted Maximum-Likelihood"},{"name":"EB","title":"Empirical Bayes"},{"name":"PM","title":"Paule-Mandel"},{"name":"FE","title":"Fixed-Effect"}],"default":"REML"},{"name":"cormeasure","title":"Correlation Model Measures","type":"List","options":[{"name":"COR","title":"Raw Correlation Coefficient"},{"name":"UCOR","title":"Raw Correlation Coefficient (Bias Corrected)"},{"name":"ZCOR","title":"Fisher's r-to-z Transformed Correlation Coefficient"}],"default":"ZCOR"}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Meta-analysis of Correlation Coefficients",
    jus: "2.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Correlations",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "ri",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Sample Sizes",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "ni",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "methodmetacor"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "cormeasure"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
