
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"N1","title":"Group One Sample Size","type":"Variable"},{"name":"M1","title":"Group One Mean","type":"Variable"},{"name":"SD1","title":"Group One Stand Deviation","type":"Variable"},{"name":"N2","title":"Group Two Sample Size","type":"Variable"},{"name":"M2","title":"Group Two Mean","type":"Variable"},{"name":"SD2","title":"Group Two Stand Deviation","type":"Variable"},{"name":"methodmetamdms","title":"Model Estimator","type":"List","options":[{"name":"DL","title":"DerSimonian-Laird"},{"name":"HE","title":"Hedges"},{"name":"HS","title":"Hunter-Schmidt"},{"name":"SJ","title":"Sidik-Jonkman"},{"name":"ML","title":"Maximum-Likelihood"},{"name":"REML","title":"Restricted Maximum-Likelihood"},{"name":"EB","title":"Empirical Bayes"},{"name":"FE","title":"Fixed-Effect"}],"default":"REML"},{"name":"mdmsmeasure","title":"Model Measures","type":"List","options":[{"name":"MD","title":"Raw Mean Difference"},{"name":"SMD","title":"Standardized Mean Difference"},{"name":"SMDH","title":"SMD with Heteroscedastic Population Variances"},{"name":"ROM","title":"Log Transformed Ratio of Means"}],"default":"SMD"},{"name":"fsntype","title":"Fail-Safe N Method","type":"List","options":[{"name":"Rosenthal","title":"Rosenthal"},{"name":"Orwin","title":"Orwin"},{"name":"Rosenberg","title":"Rosenberg"}],"default":"Rosenthal"}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Meta-Analysis - Mean Differences",
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
					label: "Group One Sample Size",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "N1",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group One Mean",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "M1",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group One Stand Deviation",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "SD1",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group Two Sample Size",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "N2",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group Two Mean",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "M2",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group Two Stand Deviation",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "SD2",
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
					name: "methodmetamdms"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "mdmsmeasure"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "fsntype"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
