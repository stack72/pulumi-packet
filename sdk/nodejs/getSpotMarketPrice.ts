// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this data source to get Packet Spot Market Price.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as packet from "@pulumi/packet";
 *
 * const example = pulumi.output(packet.getSpotMarketPrice({
 *     facility: "ewr1",
 *     plan: "c1.small.x86",
 * }, { async: true }));
 * ```
 */
export function getSpotMarketPrice(args: GetSpotMarketPriceArgs, opts?: pulumi.InvokeOptions): Promise<GetSpotMarketPriceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("packet:index/getSpotMarketPrice:getSpotMarketPrice", {
        "facility": args.facility,
        "plan": args.plan,
    }, opts);
}

/**
 * A collection of arguments for invoking getSpotMarketPrice.
 */
export interface GetSpotMarketPriceArgs {
    /**
     * Name of the facility.
     */
    readonly facility: string;
    /**
     * Name of the plan.
     */
    readonly plan: string;
}

/**
 * A collection of values returned by getSpotMarketPrice.
 */
export interface GetSpotMarketPriceResult {
    readonly facility: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly plan: string;
    /**
     * Current spot market price for given plan in given facility.
     */
    readonly price: number;
}
