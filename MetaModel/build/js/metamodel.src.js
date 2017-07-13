
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"yi","title":"Effect Size","type":"Variable"},{"name":"vi","title":"Variance","type":"Variable"},{"name":"studylabels","title":"Study Labels","type":"Variable"},{"name":"method","title":"Model Estimator","type":"List","options":[{"name":"DL","title":"DerSimonian-Laird"},{"name":"HE","title":"Hedges"},{"name":"HS","title":"Hunter-Schmidt"},{"name":"SJ","title":"Sidik-Jonkman"},{"name":"ML","title":"Maximum-Likelihood"},{"name":"REML","title":"Restricted Maximum-Likelihood"},{"name":"EB","title":"Empirical Bayes"},{"name":"PM","title":"Paule-Mandel"},{"name":"FE","title":"Fixed-Effect"}],"default":"REML"}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Meta-Analysis",
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
					label: "Effect Size",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "yi",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Variance",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "vi",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Study Labels",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "studylabels",
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
					name: "method"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
