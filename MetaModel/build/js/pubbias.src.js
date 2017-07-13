
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"yi","title":"Effect Size","type":"Variable"},{"name":"vi","title":"Variance","type":"Variable"},{"name":"fsntype","title":"Fail-Safe N Method","type":"List","options":[{"name":"Rosenthal","title":"Rosenthal"},{"name":"Orwin","title":"Orwin"},{"name":"Rosenberg","title":"Rosenberg"}],"default":"Rosenthal"}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Publication Bias",
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
