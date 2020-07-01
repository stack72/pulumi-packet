// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this datasource to get CIDR expressions for allocated IP blocks of all the types in a project, optionally filtered by facility.
 *
 * There are four types of IP blocks in Packet: global IPv4, public IPv4, private IPv4 and IPv6. Both global and public IPv4 are routable from the Internet. Public IPv4 block is allocated in a facility, and addresses from it can only be assigned to devices in that facility. Addresses from Global IPv4 block can be assigned to a device in any facility.
 *
 * The datasource has 4 list attributes: `globalIpv4`, `publicIpv4`, `privateIpv4` and `ipv6`, each listing CIDR notation (`<network>/<mask>`) of respective blocks from the project.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 *
 * const projectId = "<UUID_of_your_project>";
 * const test = packet.getIpBlockRanges({
 *     projectId: projectId,
 * });
 * export const out = test;
 * ```
 */
export function getIpBlockRanges(args: GetIpBlockRangesArgs, opts?: pulumi.InvokeOptions): Promise<GetIpBlockRangesResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("packet:index/getIpBlockRanges:getIpBlockRanges", {
        "facility": args.facility,
        "projectId": args.projectId,
    }, opts);
}

/**
 * A collection of arguments for invoking getIpBlockRanges.
 */
export interface GetIpBlockRangesArgs {
    /**
     * Facility code filtering the IP blocks. Global IPv4 blcoks will be listed anyway. If you omit this, all the block from the project will be listed.
     */
    readonly facility?: string;
    /**
     * ID of the project from which to list the blocks.
     */
    readonly projectId: string;
}

/**
 * A collection of values returned by getIpBlockRanges.
 */
export interface GetIpBlockRangesResult {
    readonly facility?: string;
    /**
     * list of CIDR expressions for Global IPv4 blocks in the project
     */
    readonly globalIpv4s: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * list of CIDR expressions for IPv6 blocks in the project
     */
    readonly ipv6s: string[];
    /**
     * list of CIDR expressions for Private IPv4 blocks in the project
     */
    readonly privateIpv4s: string[];
    readonly projectId: string;
    /**
     * list of CIDR expressions for Public IPv4 blocks in the project
     */
    readonly publicIpv4s: string[];
}
