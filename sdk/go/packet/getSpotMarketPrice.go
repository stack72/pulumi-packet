// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package packet

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Use this data source to get Packet Spot Market Price.
func GetSpotMarketPrice(ctx *pulumi.Context, args *GetSpotMarketPriceArgs, opts ...pulumi.InvokeOption) (*GetSpotMarketPriceResult, error) {
	var rv GetSpotMarketPriceResult
	err := ctx.Invoke("packet:index/getSpotMarketPrice:getSpotMarketPrice", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getSpotMarketPrice.
type GetSpotMarketPriceArgs struct {
	// Name of the facility.
	Facility string `pulumi:"facility"`
	// Name of the plan.
	Plan string `pulumi:"plan"`
}

// A collection of values returned by getSpotMarketPrice.
type GetSpotMarketPriceResult struct {
	Facility string `pulumi:"facility"`
	// id is the provider-assigned unique ID for this managed resource.
	Id   string `pulumi:"id"`
	Plan string `pulumi:"plan"`
	// Current spot market price for given plan in given facility.
	Price float64 `pulumi:"price"`
}
