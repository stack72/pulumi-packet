// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Packet project resource to allow you manage devices
 * in your projects.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 * 
 * // Create a new project
 * const tfProject1 = new packet.Project("tf_project_1", {
 *     name: "Terraform Fun",
 * });
 * ```
 * 
 * Example with BGP config
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 * 
 * // Create a new Project
 * const tfProject1 = new packet.Project("tf_project_1", {
 *     bgpConfig: {
 *         asn: 65000,
 *         deploymentType: "local",
 *         md5: "C179c28c41a85b",
 *     },
 *     name: "tftest",
 * });
 * ```
 */
export class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project {
        return new Project(name, <any>state, { ...opts, id: id });
    }

    /**
     * Enable or disable [Backend Transfer](https://support.packet.com/kb/articles/backend-transfer), default is false
     */
    public readonly backendTransfer: pulumi.Output<boolean | undefined>;
    /**
     * Optional BGP settings. Refer to [Packet guide for BGP](https://support.packet.com/kb/articles/bgp).
     */
    public readonly bgpConfig: pulumi.Output<{ asn: number, deploymentType: string, maxPrefix: number, md5?: string, status: string } | undefined>;
    /**
     * The timestamp for when the project was created
     */
    public /*out*/ readonly created: pulumi.Output<string>;
    /**
     * The name of the project
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
     */
    public readonly organizationId: pulumi.Output<string>;
    /**
     * The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organization_id`, or default).
     */
    public readonly paymentMethodId: pulumi.Output<string>;
    /**
     * The timestamp for the last time the project was updated
     */
    public /*out*/ readonly updated: pulumi.Output<string>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProjectArgs | ProjectState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ProjectState = argsOrState as ProjectState | undefined;
            inputs["backendTransfer"] = state ? state.backendTransfer : undefined;
            inputs["bgpConfig"] = state ? state.bgpConfig : undefined;
            inputs["created"] = state ? state.created : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["organizationId"] = state ? state.organizationId : undefined;
            inputs["paymentMethodId"] = state ? state.paymentMethodId : undefined;
            inputs["updated"] = state ? state.updated : undefined;
        } else {
            const args = argsOrState as ProjectArgs | undefined;
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            inputs["backendTransfer"] = args ? args.backendTransfer : undefined;
            inputs["bgpConfig"] = args ? args.bgpConfig : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["organizationId"] = args ? args.organizationId : undefined;
            inputs["paymentMethodId"] = args ? args.paymentMethodId : undefined;
            inputs["created"] = undefined /*out*/;
            inputs["updated"] = undefined /*out*/;
        }
        super("packet:index/project:Project", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * Enable or disable [Backend Transfer](https://support.packet.com/kb/articles/backend-transfer), default is false
     */
    readonly backendTransfer?: pulumi.Input<boolean>;
    /**
     * Optional BGP settings. Refer to [Packet guide for BGP](https://support.packet.com/kb/articles/bgp).
     */
    readonly bgpConfig?: pulumi.Input<{ asn: pulumi.Input<number>, deploymentType: pulumi.Input<string>, maxPrefix?: pulumi.Input<number>, md5?: pulumi.Input<string>, status?: pulumi.Input<string> }>;
    /**
     * The timestamp for when the project was created
     */
    readonly created?: pulumi.Input<string>;
    /**
     * The name of the project
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
     */
    readonly organizationId?: pulumi.Input<string>;
    /**
     * The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organization_id`, or default).
     */
    readonly paymentMethodId?: pulumi.Input<string>;
    /**
     * The timestamp for the last time the project was updated
     */
    readonly updated?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * Enable or disable [Backend Transfer](https://support.packet.com/kb/articles/backend-transfer), default is false
     */
    readonly backendTransfer?: pulumi.Input<boolean>;
    /**
     * Optional BGP settings. Refer to [Packet guide for BGP](https://support.packet.com/kb/articles/bgp).
     */
    readonly bgpConfig?: pulumi.Input<{ asn: pulumi.Input<number>, deploymentType: pulumi.Input<string>, maxPrefix?: pulumi.Input<number>, md5?: pulumi.Input<string>, status?: pulumi.Input<string> }>;
    /**
     * The name of the project
     */
    readonly name: pulumi.Input<string>;
    /**
     * The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
     */
    readonly organizationId?: pulumi.Input<string>;
    /**
     * The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organization_id`, or default).
     */
    readonly paymentMethodId?: pulumi.Input<string>;
}
