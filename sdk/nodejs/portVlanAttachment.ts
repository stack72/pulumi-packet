// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a resource to attach device ports to VLANs.
 * 
 * Device and VLAN must be in the same facility.
 * 
 * If you need this resource to add the port back to bond on removal, set `force_bond = true`.
 * 
 * To learn more about Layer 2 networking in Packet, refer to
 * * https://support.packet.com/kb/articles/layer-2-configurations
 * * https://support.packet.com/kb/articles/layer-2-overview
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 * 
 * const testDevice = new packet.Device("test", {
 *     billingCycle: "hourly",
 *     facility: "ewr1",
 *     hostname: "test",
 *     networkType: "layer2-individual",
 *     operatingSystem: "ubuntu_16_04",
 *     plan: "m1.xlarge.x86",
 *     projectId: local_project_id,
 * });
 * const testVlan = new packet.Vlan("test", {
 *     description: "VLAN in New Jersey",
 *     facility: "ewr1",
 *     projectId: local_project_id,
 * });
 * const test1Vlan = new packet.Vlan("test1", {
 *     description: "VLAN in New Jersey",
 *     facility: "ewr1",
 *     projectId: packet_project_test.id,
 * });
 * const test2Vlan = new packet.Vlan("test2", {
 *     description: "VLAN in New Jersey",
 *     facility: "ewr1",
 *     projectId: local_project_id,
 * });
 * const testPortVlanAttachment = new packet.PortVlanAttachment("test", {
 *     deviceId: testDevice.id,
 *     portName: "eth1",
 *     vlanVnid: testVlan.vxlan,
 * });
 * const test1PortVlanAttachment = new packet.PortVlanAttachment("test1", {
 *     deviceId: testDevice.id,
 *     portName: "eth1",
 *     vlanVnid: test1Vlan.vxlan,
 * });
 * const test2PortVlanAttachment = new packet.PortVlanAttachment("test2", {
 *     deviceId: testDevice.id,
 *     portName: "eth1",
 *     vlanVnid: test2Vlan.vxlan,
 * });
 * ```
 * 
 * ## Attribute Referece
 * 
 * * `id` - UUID of device port used in the assignment
 * * `vlan_id` - UUID of VLAN API resource
 * * `port_id` - UUID of device port
 */
export class PortVlanAttachment extends pulumi.CustomResource {
    /**
     * Get an existing PortVlanAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PortVlanAttachmentState, opts?: pulumi.CustomResourceOptions): PortVlanAttachment {
        return new PortVlanAttachment(name, <any>state, { ...opts, id: id });
    }

    /**
     * ID of device to be assigned to the VLAN
     */
    public readonly deviceId: pulumi.Output<string>;
    /**
     * Add port back to the bond when this resource is removed. Default is false.
     */
    public readonly forceBond: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly portId: pulumi.Output<string>;
    /**
     * Name of network port to be assigned to the VLAN
     */
    public readonly portName: pulumi.Output<string>;
    public /*out*/ readonly vlanId: pulumi.Output<string>;
    /**
     * VXLAN Network Identifier, integer
     */
    public readonly vlanVnid: pulumi.Output<number>;

    /**
     * Create a PortVlanAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PortVlanAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PortVlanAttachmentArgs | PortVlanAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PortVlanAttachmentState = argsOrState as PortVlanAttachmentState | undefined;
            inputs["deviceId"] = state ? state.deviceId : undefined;
            inputs["forceBond"] = state ? state.forceBond : undefined;
            inputs["portId"] = state ? state.portId : undefined;
            inputs["portName"] = state ? state.portName : undefined;
            inputs["vlanId"] = state ? state.vlanId : undefined;
            inputs["vlanVnid"] = state ? state.vlanVnid : undefined;
        } else {
            const args = argsOrState as PortVlanAttachmentArgs | undefined;
            if (!args || args.deviceId === undefined) {
                throw new Error("Missing required property 'deviceId'");
            }
            if (!args || args.portName === undefined) {
                throw new Error("Missing required property 'portName'");
            }
            if (!args || args.vlanVnid === undefined) {
                throw new Error("Missing required property 'vlanVnid'");
            }
            inputs["deviceId"] = args ? args.deviceId : undefined;
            inputs["forceBond"] = args ? args.forceBond : undefined;
            inputs["portName"] = args ? args.portName : undefined;
            inputs["vlanVnid"] = args ? args.vlanVnid : undefined;
            inputs["portId"] = undefined /*out*/;
            inputs["vlanId"] = undefined /*out*/;
        }
        super("packet:index/portVlanAttachment:PortVlanAttachment", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PortVlanAttachment resources.
 */
export interface PortVlanAttachmentState {
    /**
     * ID of device to be assigned to the VLAN
     */
    readonly deviceId?: pulumi.Input<string>;
    /**
     * Add port back to the bond when this resource is removed. Default is false.
     */
    readonly forceBond?: pulumi.Input<boolean>;
    readonly portId?: pulumi.Input<string>;
    /**
     * Name of network port to be assigned to the VLAN
     */
    readonly portName?: pulumi.Input<string>;
    readonly vlanId?: pulumi.Input<string>;
    /**
     * VXLAN Network Identifier, integer
     */
    readonly vlanVnid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a PortVlanAttachment resource.
 */
export interface PortVlanAttachmentArgs {
    /**
     * ID of device to be assigned to the VLAN
     */
    readonly deviceId: pulumi.Input<string>;
    /**
     * Add port back to the bond when this resource is removed. Default is false.
     */
    readonly forceBond?: pulumi.Input<boolean>;
    /**
     * Name of network port to be assigned to the VLAN
     */
    readonly portName: pulumi.Input<string>;
    /**
     * VXLAN Network Identifier, integer
     */
    readonly vlanVnid: pulumi.Input<number>;
}
