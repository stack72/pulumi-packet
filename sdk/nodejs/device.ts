// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

import {Facility, OperatingSystem, Plan} from "./index";

/**
 * Provides a Packet device resource. This can be used to create,
 * modify, and delete devices.
 * 
 * > **Note:** All arguments including the `root_password` and `user_data` will be stored in
 *  the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 * 
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 * 
 * // Create a device and add it to cool_project
 * const web1 = new packet.Device("web1", {
 *     billingCycle: "hourly",
 *     facilities: ["ewr1"],
 *     hostname: "tf.coreos2",
 *     operatingSystem: "coreos_stable",
 *     plan: "t1.small.x86",
 *     projectId: local_project_id,
 * });
 * ```
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 * 
 * // Same as above, but boot via iPXE initially, using the Ignition Provider for provisioning
 * const pxe1 = new packet.Device("pxe1", {
 *     alwaysPxe: false,
 *     billingCycle: "hourly",
 *     facilities: ["ewr1"],
 *     hostname: "tf.coreos2-pxe",
 *     ipxeScriptUrl: "https://rawgit.com/cloudnativelabs/pxe/master/packet/coreos-stable-packet.ipxe",
 *     operatingSystem: "custom_ipxe",
 *     plan: "t1.small.x86",
 *     projectId: local_project_id,
 *     userData: ignition_config_example.rendered,
 * });
 * ```
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 * 
 * // Deploy device on next-available reserved hardware and do custom partitioning.
 * const web1 = new packet.Device("web1", {
 *     billingCycle: "hourly",
 *     facilities: ["sjc1"],
 *     hardwareReservationId: "next-available",
 *     hostname: "tftest",
 *     operatingSystem: "ubuntu_16_04",
 *     plan: "t1.small.x86",
 *     projectId: local_project_id,
 *     storage: `{
 *   "disks": [
 *     {
 *       "device": "/dev/sda",
 *       "wipeTable": true,
 *       "partitions": [
 *         {
 *           "label": "BIOS",
 *           "number": 1,
 *           "size": 4096
 *         },
 *         {
 *           "label": "SWAP",
 *           "number": 2,
 *           "size": "3993600"
 *         },
 *         {
 *           "label": "ROOT",
 *           "number": 3,
 *           "size": 0
 *         }
 *       ]
 *     }
 *   ],
 *   "filesystems": [
 *     {
 *       "mount": {
 *         "device": "/dev/sda3",
 *         "format": "ext4",
 *         "point": "/",
 *         "create": {
 *           "options": [
 *             "-L",
 *             "ROOT"
 *           ]
 *         }
 *       }
 *     },
 *     {
 *       "mount": {
 *         "device": "/dev/sda2",
 *         "format": "swap",
 *         "point": "none",
 *         "create": {
 *           "options": [
 *             "-L",
 *             "SWAP"
 *           ]
 *         }
 *       }
 *     }
 *   ]
 * }
 * `,
 * });
 * ```
 */
export class Device extends pulumi.CustomResource {
    /**
     * Get an existing Device resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeviceState, opts?: pulumi.CustomResourceOptions): Device {
        return new Device(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'packet:index/device:Device';

    /**
     * Returns true if the given object is an instance of Device.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Device {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Device.__pulumiType;
    }

    /**
     * The ipv4 private IP assigned to the device
     */
    public /*out*/ readonly accessPrivateIpv4!: pulumi.Output<string>;
    /**
     * The ipv4 maintenance IP assigned to the device
     */
    public /*out*/ readonly accessPublicIpv4!: pulumi.Output<string>;
    /**
     * The ipv6 maintenance IP assigned to the device
     */
    public /*out*/ readonly accessPublicIpv6!: pulumi.Output<string>;
    /**
     * If true, a device with OS `custom_ipxe` will
     * continue to boot via iPXE on reboots.
     */
    public readonly alwaysPxe!: pulumi.Output<boolean | undefined>;
    /**
     * monthly or hourly
     */
    public readonly billingCycle!: pulumi.Output<string>;
    /**
     * The timestamp for when the device was created
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The facility where the device is deployed.
     */
    public /*out*/ readonly deployedFacility!: pulumi.Output<string>;
    /**
     * Description string for the device
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * List of facility codes with deployment preferences. Packet API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or `any` (a wildcard). To find the facility code, visit [Facilities API docs](https://www.packet.com/developers/api/#facilities), set your API auth token in the top of the page and see JSON from the API response.
     */
    public readonly facilities!: pulumi.Output<Facility[]>;
    /**
     * The id of hardware reservation where you want this device deployed, or `next-available` if you want to pick your next available reservation automatically.
     */
    public readonly hardwareReservationId!: pulumi.Output<string>;
    /**
     * The device name
     */
    public readonly hostname!: pulumi.Output<string>;
    /**
     * A set containing one or more of [`private_ipv4`, `public_ipv4`, `public_ipv6`]. It specifies which IP address types a new device should obtain. If omitted, a created device will obtain all 3 addresses. If you only want private IPv4 address for the new device, pass [`private_ipv4`].
     */
    public readonly ipAddressTypes!: pulumi.Output<string[] | undefined>;
    /**
     * URL pointing to a hosted iPXE script. More
     * information is in the
     * [Custom iPXE](https://support.packet.com/kb/articles/custom-ipxe)
     * doc.
     */
    public readonly ipxeScriptUrl!: pulumi.Output<string | undefined>;
    /**
     * Whether the device is locked
     */
    public /*out*/ readonly locked!: pulumi.Output<boolean>;
    /**
     * The device's private and public IP (v4 and v6) network details. When a device is run without any special network configuration, it will have 3 networks: 
     * * Public IPv4 at `packet_device.name.network.0`
     * * IPv6 at `packet_device.name.network.1`
     * * Private IPv4 at `packet_device.name.network.2`
     * Elastic addresses then stack by type - an assigned public IPv4 will go after the management public IPv4 (to index 1), and will then shift the indices of the IPv6 and private IPv4. Assigned private IPv4 will go after the management private IPv4 (to the end of the network list).
     * The fields of the network attributes are:
     */
    public /*out*/ readonly networks!: pulumi.Output<{ address: string, cidr: number, family: number, gateway: string, public: boolean }[]>;
    /**
     * Network type of device, used for [Layer 2 networking](https://support.packet.com/kb/articles/layer-2-overview). Allowed values are `layer3`, `hybrid`, `layer2-individual` and `layer2-bonded`. If you keep it empty, Terraform will not handle the network type of the device.
     */
    public readonly networkType!: pulumi.Output<string | undefined>;
    /**
     * The operating system slug. To find the slug, or visit [Operating Systems API docs](https://www.packet.com/developers/api/#operatingsystems), set your API auth token in the top of the page and see JSON from the API response.
     */
    public readonly operatingSystem!: pulumi.Output<OperatingSystem>;
    /**
     * The device plan slug. To find the plan slug, visit [Device plans API docs](https://www.packet.com/developers/api/#plans), set your auth token in the top of the page and see JSON from the API response.
     */
    public readonly plan!: pulumi.Output<string>;
    /**
     * Ports assigned to the device
     */
    public /*out*/ readonly ports!: pulumi.Output<{ bonded: boolean, id: string, mac: string, name: string, type: string }[]>;
    /**
     * The id of the project in which to create the device
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [packet_project_ssh_key][packet_project_ssh_key.html] resource.
     */
    public readonly projectSshKeyIds!: pulumi.Output<string[] | undefined>;
    /**
     * Size of allocated subnet, more
     * information is in the
     * [Custom Subnet Size](https://support.packet.com/kb/articles/custom-subnet-size) doc.
     */
    public readonly publicIpv4SubnetSize!: pulumi.Output<number>;
    /**
     * Root password to the server (disabled after 24 hours)
     */
    public /*out*/ readonly rootPassword!: pulumi.Output<string>;
    /**
     * List of IDs of SSH keys deployed in the device, can be both user and project SSH keys
     */
    public /*out*/ readonly sshKeyIds!: pulumi.Output<string[]>;
    /**
     * The status of the device
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://support.packet.com/kb/articles/custom-partitioning-raid) doc.
     */
    public readonly storage!: pulumi.Output<string | undefined>;
    /**
     * Tags attached to the device
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The timestamp for the last time the device was updated
     */
    public /*out*/ readonly updated!: pulumi.Output<string>;
    /**
     * A string of the desired User Data for the device.
     */
    public readonly userData!: pulumi.Output<string | undefined>;

    /**
     * Create a Device resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DeviceArgs | DeviceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DeviceState | undefined;
            inputs["accessPrivateIpv4"] = state ? state.accessPrivateIpv4 : undefined;
            inputs["accessPublicIpv4"] = state ? state.accessPublicIpv4 : undefined;
            inputs["accessPublicIpv6"] = state ? state.accessPublicIpv6 : undefined;
            inputs["alwaysPxe"] = state ? state.alwaysPxe : undefined;
            inputs["billingCycle"] = state ? state.billingCycle : undefined;
            inputs["created"] = state ? state.created : undefined;
            inputs["deployedFacility"] = state ? state.deployedFacility : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["facilities"] = state ? state.facilities : undefined;
            inputs["hardwareReservationId"] = state ? state.hardwareReservationId : undefined;
            inputs["hostname"] = state ? state.hostname : undefined;
            inputs["ipAddressTypes"] = state ? state.ipAddressTypes : undefined;
            inputs["ipxeScriptUrl"] = state ? state.ipxeScriptUrl : undefined;
            inputs["locked"] = state ? state.locked : undefined;
            inputs["networks"] = state ? state.networks : undefined;
            inputs["networkType"] = state ? state.networkType : undefined;
            inputs["operatingSystem"] = state ? state.operatingSystem : undefined;
            inputs["plan"] = state ? state.plan : undefined;
            inputs["ports"] = state ? state.ports : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["projectSshKeyIds"] = state ? state.projectSshKeyIds : undefined;
            inputs["publicIpv4SubnetSize"] = state ? state.publicIpv4SubnetSize : undefined;
            inputs["rootPassword"] = state ? state.rootPassword : undefined;
            inputs["sshKeyIds"] = state ? state.sshKeyIds : undefined;
            inputs["state"] = state ? state.state : undefined;
            inputs["storage"] = state ? state.storage : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["updated"] = state ? state.updated : undefined;
            inputs["userData"] = state ? state.userData : undefined;
        } else {
            const args = argsOrState as DeviceArgs | undefined;
            if (!args || args.billingCycle === undefined) {
                throw new Error("Missing required property 'billingCycle'");
            }
            if (!args || args.facilities === undefined) {
                throw new Error("Missing required property 'facilities'");
            }
            if (!args || args.hostname === undefined) {
                throw new Error("Missing required property 'hostname'");
            }
            if (!args || args.operatingSystem === undefined) {
                throw new Error("Missing required property 'operatingSystem'");
            }
            if (!args || args.plan === undefined) {
                throw new Error("Missing required property 'plan'");
            }
            if (!args || args.projectId === undefined) {
                throw new Error("Missing required property 'projectId'");
            }
            inputs["alwaysPxe"] = args ? args.alwaysPxe : undefined;
            inputs["billingCycle"] = args ? args.billingCycle : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["facilities"] = args ? args.facilities : undefined;
            inputs["hardwareReservationId"] = args ? args.hardwareReservationId : undefined;
            inputs["hostname"] = args ? args.hostname : undefined;
            inputs["ipAddressTypes"] = args ? args.ipAddressTypes : undefined;
            inputs["ipxeScriptUrl"] = args ? args.ipxeScriptUrl : undefined;
            inputs["networkType"] = args ? args.networkType : undefined;
            inputs["operatingSystem"] = args ? args.operatingSystem : undefined;
            inputs["plan"] = args ? args.plan : undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["projectSshKeyIds"] = args ? args.projectSshKeyIds : undefined;
            inputs["publicIpv4SubnetSize"] = args ? args.publicIpv4SubnetSize : undefined;
            inputs["storage"] = args ? args.storage : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["userData"] = args ? args.userData : undefined;
            inputs["accessPrivateIpv4"] = undefined /*out*/;
            inputs["accessPublicIpv4"] = undefined /*out*/;
            inputs["accessPublicIpv6"] = undefined /*out*/;
            inputs["created"] = undefined /*out*/;
            inputs["deployedFacility"] = undefined /*out*/;
            inputs["locked"] = undefined /*out*/;
            inputs["networks"] = undefined /*out*/;
            inputs["ports"] = undefined /*out*/;
            inputs["rootPassword"] = undefined /*out*/;
            inputs["sshKeyIds"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["updated"] = undefined /*out*/;
        }
        super(Device.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Device resources.
 */
export interface DeviceState {
    /**
     * The ipv4 private IP assigned to the device
     */
    readonly accessPrivateIpv4?: pulumi.Input<string>;
    /**
     * The ipv4 maintenance IP assigned to the device
     */
    readonly accessPublicIpv4?: pulumi.Input<string>;
    /**
     * The ipv6 maintenance IP assigned to the device
     */
    readonly accessPublicIpv6?: pulumi.Input<string>;
    /**
     * If true, a device with OS `custom_ipxe` will
     * continue to boot via iPXE on reboots.
     */
    readonly alwaysPxe?: pulumi.Input<boolean>;
    /**
     * monthly or hourly
     */
    readonly billingCycle?: pulumi.Input<string>;
    /**
     * The timestamp for when the device was created
     */
    readonly created?: pulumi.Input<string>;
    /**
     * The facility where the device is deployed.
     */
    readonly deployedFacility?: pulumi.Input<string>;
    /**
     * Description string for the device
     */
    readonly description?: pulumi.Input<string>;
    /**
     * List of facility codes with deployment preferences. Packet API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or `any` (a wildcard). To find the facility code, visit [Facilities API docs](https://www.packet.com/developers/api/#facilities), set your API auth token in the top of the page and see JSON from the API response.
     */
    readonly facilities?: pulumi.Input<pulumi.Input<Facility>[]>;
    /**
     * The id of hardware reservation where you want this device deployed, or `next-available` if you want to pick your next available reservation automatically.
     */
    readonly hardwareReservationId?: pulumi.Input<string>;
    /**
     * The device name
     */
    readonly hostname?: pulumi.Input<string>;
    /**
     * A set containing one or more of [`private_ipv4`, `public_ipv4`, `public_ipv6`]. It specifies which IP address types a new device should obtain. If omitted, a created device will obtain all 3 addresses. If you only want private IPv4 address for the new device, pass [`private_ipv4`].
     */
    readonly ipAddressTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * URL pointing to a hosted iPXE script. More
     * information is in the
     * [Custom iPXE](https://support.packet.com/kb/articles/custom-ipxe)
     * doc.
     */
    readonly ipxeScriptUrl?: pulumi.Input<string>;
    /**
     * Whether the device is locked
     */
    readonly locked?: pulumi.Input<boolean>;
    /**
     * The device's private and public IP (v4 and v6) network details. When a device is run without any special network configuration, it will have 3 networks: 
     * * Public IPv4 at `packet_device.name.network.0`
     * * IPv6 at `packet_device.name.network.1`
     * * Private IPv4 at `packet_device.name.network.2`
     * Elastic addresses then stack by type - an assigned public IPv4 will go after the management public IPv4 (to index 1), and will then shift the indices of the IPv6 and private IPv4. Assigned private IPv4 will go after the management private IPv4 (to the end of the network list).
     * The fields of the network attributes are:
     */
    readonly networks?: pulumi.Input<pulumi.Input<{ address?: pulumi.Input<string>, cidr?: pulumi.Input<number>, family?: pulumi.Input<number>, gateway?: pulumi.Input<string>, public?: pulumi.Input<boolean> }>[]>;
    /**
     * Network type of device, used for [Layer 2 networking](https://support.packet.com/kb/articles/layer-2-overview). Allowed values are `layer3`, `hybrid`, `layer2-individual` and `layer2-bonded`. If you keep it empty, Terraform will not handle the network type of the device.
     */
    readonly networkType?: pulumi.Input<string>;
    /**
     * The operating system slug. To find the slug, or visit [Operating Systems API docs](https://www.packet.com/developers/api/#operatingsystems), set your API auth token in the top of the page and see JSON from the API response.
     */
    readonly operatingSystem?: pulumi.Input<OperatingSystem>;
    /**
     * The device plan slug. To find the plan slug, visit [Device plans API docs](https://www.packet.com/developers/api/#plans), set your auth token in the top of the page and see JSON from the API response.
     */
    readonly plan?: pulumi.Input<string>;
    /**
     * Ports assigned to the device
     */
    readonly ports?: pulumi.Input<pulumi.Input<{ bonded?: pulumi.Input<boolean>, id?: pulumi.Input<string>, mac?: pulumi.Input<string>, name?: pulumi.Input<string>, type?: pulumi.Input<string> }>[]>;
    /**
     * The id of the project in which to create the device
     */
    readonly projectId?: pulumi.Input<string>;
    /**
     * Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [packet_project_ssh_key][packet_project_ssh_key.html] resource.
     */
    readonly projectSshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Size of allocated subnet, more
     * information is in the
     * [Custom Subnet Size](https://support.packet.com/kb/articles/custom-subnet-size) doc.
     */
    readonly publicIpv4SubnetSize?: pulumi.Input<number>;
    /**
     * Root password to the server (disabled after 24 hours)
     */
    readonly rootPassword?: pulumi.Input<string>;
    /**
     * List of IDs of SSH keys deployed in the device, can be both user and project SSH keys
     */
    readonly sshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The status of the device
     */
    readonly state?: pulumi.Input<string>;
    /**
     * JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://support.packet.com/kb/articles/custom-partitioning-raid) doc.
     */
    readonly storage?: pulumi.Input<string>;
    /**
     * Tags attached to the device
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The timestamp for the last time the device was updated
     */
    readonly updated?: pulumi.Input<string>;
    /**
     * A string of the desired User Data for the device.
     */
    readonly userData?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Device resource.
 */
export interface DeviceArgs {
    /**
     * If true, a device with OS `custom_ipxe` will
     * continue to boot via iPXE on reboots.
     */
    readonly alwaysPxe?: pulumi.Input<boolean>;
    /**
     * monthly or hourly
     */
    readonly billingCycle: pulumi.Input<string>;
    /**
     * Description string for the device
     */
    readonly description?: pulumi.Input<string>;
    /**
     * List of facility codes with deployment preferences. Packet API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or `any` (a wildcard). To find the facility code, visit [Facilities API docs](https://www.packet.com/developers/api/#facilities), set your API auth token in the top of the page and see JSON from the API response.
     */
    readonly facilities: pulumi.Input<pulumi.Input<Facility>[]>;
    /**
     * The id of hardware reservation where you want this device deployed, or `next-available` if you want to pick your next available reservation automatically.
     */
    readonly hardwareReservationId?: pulumi.Input<string>;
    /**
     * The device name
     */
    readonly hostname: pulumi.Input<string>;
    /**
     * A set containing one or more of [`private_ipv4`, `public_ipv4`, `public_ipv6`]. It specifies which IP address types a new device should obtain. If omitted, a created device will obtain all 3 addresses. If you only want private IPv4 address for the new device, pass [`private_ipv4`].
     */
    readonly ipAddressTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * URL pointing to a hosted iPXE script. More
     * information is in the
     * [Custom iPXE](https://support.packet.com/kb/articles/custom-ipxe)
     * doc.
     */
    readonly ipxeScriptUrl?: pulumi.Input<string>;
    /**
     * Network type of device, used for [Layer 2 networking](https://support.packet.com/kb/articles/layer-2-overview). Allowed values are `layer3`, `hybrid`, `layer2-individual` and `layer2-bonded`. If you keep it empty, Terraform will not handle the network type of the device.
     */
    readonly networkType?: pulumi.Input<string>;
    /**
     * The operating system slug. To find the slug, or visit [Operating Systems API docs](https://www.packet.com/developers/api/#operatingsystems), set your API auth token in the top of the page and see JSON from the API response.
     */
    readonly operatingSystem: pulumi.Input<OperatingSystem>;
    /**
     * The device plan slug. To find the plan slug, visit [Device plans API docs](https://www.packet.com/developers/api/#plans), set your auth token in the top of the page and see JSON from the API response.
     */
    readonly plan: pulumi.Input<string>;
    /**
     * The id of the project in which to create the device
     */
    readonly projectId: pulumi.Input<string>;
    /**
     * Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [packet_project_ssh_key][packet_project_ssh_key.html] resource.
     */
    readonly projectSshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Size of allocated subnet, more
     * information is in the
     * [Custom Subnet Size](https://support.packet.com/kb/articles/custom-subnet-size) doc.
     */
    readonly publicIpv4SubnetSize?: pulumi.Input<number>;
    /**
     * JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://support.packet.com/kb/articles/custom-partitioning-raid) doc.
     */
    readonly storage?: pulumi.Input<string>;
    /**
     * Tags attached to the device
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A string of the desired User Data for the device.
     */
    readonly userData?: pulumi.Input<string>;
}
