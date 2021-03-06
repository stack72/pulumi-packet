// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a resource for [Packet Connect](https://www.packet.com/cloud/all-features/packet-connect/), a link between Packet VLANs and VLANs in other cloud providers.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 * 
 * const vlan1 = new packet.Vlan("vlan1", {
 *     description: "VLAN in New Jersey",
 *     facility: "ewr1",
 *     projectId: local_project_id,
 * });
 * const myExpressroute = new packet.Connect("my_expressroute", {
 *     facility: "ewr1",
 *     name: "test",
 *     portSpeed: 100,
 *     projectId: local_project_id,
 *     // provider ID for Azure ExpressRoute is ed5de8e0-77a9-4d3b-9de0-65281d3aa831
 *     providerId: "ed5de8e0-77a9-4d3b-9de0-65281d3aa831",
 *     // provider_payload for Azure ExpressRoute provider is your ExpressRoute
 *     // authorization key (in UUID format)
 *     providerPayload: "58b4ec12-af34-4435-5435-db3bde4a4b3a",
 *     vxlan: vlan1.vxlan,
 * });
 * ```
 */
export class Connect extends pulumi.CustomResource {
    /**
     * Get an existing Connect resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectState, opts?: pulumi.CustomResourceOptions): Connect {
        return new Connect(name, <any>state, { ...opts, id: id });
    }

    /**
     * Facility where to create the VLAN
     */
    public readonly facility: pulumi.Output<string>;
    /**
     * Name for the Connect resource
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Port speed in Mbps
     */
    public readonly portSpeed: pulumi.Output<number>;
    /**
     * ID of parent project
     */
    public readonly projectId: pulumi.Output<string>;
    /**
     * ID of Connect Provider. Provider IDs are
     * * Azure ExpressRoute - "ed5de8e0-77a9-4d3b-9de0-65281d3aa831"
     */
    public readonly providerId: pulumi.Output<string>;
    /**
     * Authorization key for the Connect provider
     */
    public readonly providerPayload: pulumi.Output<string>;
    /**
     * Status of the Connect resource, one of PROVISIONING, PROVISIONED, DEPROVISIONING, DEPROVISIONED
     */
    public /*out*/ readonly status: pulumi.Output<string>;
    /**
     * VXLAN Network identifier of the linked Packet VLAN
     */
    public readonly vxlan: pulumi.Output<number>;

    /**
     * Create a Connect resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConnectArgs | ConnectState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ConnectState = argsOrState as ConnectState | undefined;
            inputs["facility"] = state ? state.facility : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["portSpeed"] = state ? state.portSpeed : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["providerId"] = state ? state.providerId : undefined;
            inputs["providerPayload"] = state ? state.providerPayload : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["vxlan"] = state ? state.vxlan : undefined;
        } else {
            const args = argsOrState as ConnectArgs | undefined;
            if (!args || args.facility === undefined) {
                throw new Error("Missing required property 'facility'");
            }
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            if (!args || args.portSpeed === undefined) {
                throw new Error("Missing required property 'portSpeed'");
            }
            if (!args || args.projectId === undefined) {
                throw new Error("Missing required property 'projectId'");
            }
            if (!args || args.providerId === undefined) {
                throw new Error("Missing required property 'providerId'");
            }
            if (!args || args.providerPayload === undefined) {
                throw new Error("Missing required property 'providerPayload'");
            }
            if (!args || args.vxlan === undefined) {
                throw new Error("Missing required property 'vxlan'");
            }
            inputs["facility"] = args ? args.facility : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["portSpeed"] = args ? args.portSpeed : undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["providerId"] = args ? args.providerId : undefined;
            inputs["providerPayload"] = args ? args.providerPayload : undefined;
            inputs["vxlan"] = args ? args.vxlan : undefined;
            inputs["status"] = undefined /*out*/;
        }
        super("packet:index/connect:Connect", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Connect resources.
 */
export interface ConnectState {
    /**
     * Facility where to create the VLAN
     */
    readonly facility?: pulumi.Input<string>;
    /**
     * Name for the Connect resource
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Port speed in Mbps
     */
    readonly portSpeed?: pulumi.Input<number>;
    /**
     * ID of parent project
     */
    readonly projectId?: pulumi.Input<string>;
    /**
     * ID of Connect Provider. Provider IDs are
     * * Azure ExpressRoute - "ed5de8e0-77a9-4d3b-9de0-65281d3aa831"
     */
    readonly providerId?: pulumi.Input<string>;
    /**
     * Authorization key for the Connect provider
     */
    readonly providerPayload?: pulumi.Input<string>;
    /**
     * Status of the Connect resource, one of PROVISIONING, PROVISIONED, DEPROVISIONING, DEPROVISIONED
     */
    readonly status?: pulumi.Input<string>;
    /**
     * VXLAN Network identifier of the linked Packet VLAN
     */
    readonly vxlan?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Connect resource.
 */
export interface ConnectArgs {
    /**
     * Facility where to create the VLAN
     */
    readonly facility: pulumi.Input<string>;
    /**
     * Name for the Connect resource
     */
    readonly name: pulumi.Input<string>;
    /**
     * Port speed in Mbps
     */
    readonly portSpeed: pulumi.Input<number>;
    /**
     * ID of parent project
     */
    readonly projectId: pulumi.Input<string>;
    /**
     * ID of Connect Provider. Provider IDs are
     * * Azure ExpressRoute - "ed5de8e0-77a9-4d3b-9de0-65281d3aa831"
     */
    readonly providerId: pulumi.Input<string>;
    /**
     * Authorization key for the Connect provider
     */
    readonly providerPayload: pulumi.Input<string>;
    /**
     * VXLAN Network identifier of the linked Packet VLAN
     */
    readonly vxlan: pulumi.Input<number>;
}
