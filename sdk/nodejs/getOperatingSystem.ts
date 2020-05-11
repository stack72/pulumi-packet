// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this data source to get Packet Operating System image.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 * 
 * const example = packet.getOperatingSystem({
 *     name: "Container Linux",
 *     distro: "coreos",
 *     version: "alpha",
 *     provisionableOn: "c1.small.x86",
 * });
 * const server = new packet.Device("server", {
 *     hostname: "tf.coreos2",
 *     plan: "c1.small.x86",
 *     facilities: ["ewr1"],
 *     operatingSystem: example.then(example => example.id),
 *     billingCycle: "hourly",
 *     projectId: local.project_id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/d/operating_system.html.markdown.
 */
export function getOperatingSystem(args?: GetOperatingSystemArgs, opts?: pulumi.InvokeOptions): Promise<GetOperatingSystemResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("packet:index/getOperatingSystem:getOperatingSystem", {
        "distro": args.distro,
        "name": args.name,
        "provisionableOn": args.provisionableOn,
        "version": args.version,
    }, opts);
}

/**
 * A collection of arguments for invoking getOperatingSystem.
 */
export interface GetOperatingSystemArgs {
    /**
     * Name of the OS distribution.
     */
    readonly distro?: string;
    /**
     * Name or part of the name of the distribution. Case insensitive.
     */
    readonly name?: string;
    /**
     * Plan name.
     */
    readonly provisionableOn?: string;
    /**
     * Version of the distribution
     */
    readonly version?: string;
}

/**
 * A collection of values returned by getOperatingSystem.
 */
export interface GetOperatingSystemResult {
    readonly distro?: string;
    readonly name?: string;
    readonly provisionableOn?: string;
    /**
     * Operating system slug (same as `id`)
     */
    readonly slug: string;
    readonly version?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
