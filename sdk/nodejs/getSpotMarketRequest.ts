// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Provides a Packet spotMarketRequest datasource. The datasource will contain list of device IDs created by referenced Spot Market Request.
 * 
 * 
 * 
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/d/spot_market_request.html.markdown.
 */
export function getSpotMarketRequest(args: GetSpotMarketRequestArgs, opts?: pulumi.InvokeOptions): Promise<GetSpotMarketRequestResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("packet:index/getSpotMarketRequest:getSpotMarketRequest", {
        "requestId": args.requestId,
    }, opts);
}

/**
 * A collection of arguments for invoking getSpotMarketRequest.
 */
export interface GetSpotMarketRequestArgs {
    /**
     * The id of the Spot Market Request
     */
    readonly requestId: string;
}

/**
 * A collection of values returned by getSpotMarketRequest.
 */
export interface GetSpotMarketRequestResult {
    /**
     * List of IDs of devices spawned by the referenced Spot Market Request
     */
    readonly deviceIds: string[];
    readonly requestId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
