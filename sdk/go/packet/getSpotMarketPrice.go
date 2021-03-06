// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package packet

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get Packet Spot Market Price.
func LookupSpotMarketPrice(ctx *pulumi.Context, args *GetSpotMarketPriceArgs) (*GetSpotMarketPriceResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["facility"] = args.Facility
		inputs["plan"] = args.Plan
	}
	outputs, err := ctx.Invoke("packet:index/getSpotMarketPrice:getSpotMarketPrice", inputs)
	if err != nil {
		return nil, err
	}
	return &GetSpotMarketPriceResult{
		Facility: outputs["facility"],
		Plan: outputs["plan"],
		Price: outputs["price"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getSpotMarketPrice.
type GetSpotMarketPriceArgs struct {
	// Name of the facility.
	Facility interface{}
	// Name of the plan.
	Plan interface{}
}

// A collection of values returned by getSpotMarketPrice.
type GetSpotMarketPriceResult struct {
	Facility interface{}
	Plan interface{}
	// Current spot market price for given plan in given facility.
	Price interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
