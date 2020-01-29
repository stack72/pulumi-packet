// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package packet

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get Packet Operating System image.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/d/operating_system.html.markdown.
func GetOperatingSystem(ctx *pulumi.Context, args *GetOperatingSystemArgs, opts ...pulumi.InvokeOption) (*GetOperatingSystemResult, error) {
	var rv GetOperatingSystemResult
	err := ctx.Invoke("packet:index/getOperatingSystem:getOperatingSystem", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getOperatingSystem.
type GetOperatingSystemArgs struct {
	// Name of the OS distribution.
	Distro *string `pulumi:"distro"`
	// Name or part of the name of the distribution. Case insensitive.
	Name *string `pulumi:"name"`
	// Plan name.
	ProvisionableOn *string `pulumi:"provisionableOn"`
	// Version of the distribution
	Version *string `pulumi:"version"`
}


// A collection of values returned by getOperatingSystem.
type GetOperatingSystemResult struct {
	Distro *string `pulumi:"distro"`
	// id is the provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	Name *string `pulumi:"name"`
	ProvisionableOn *string `pulumi:"provisionableOn"`
	// Operating system slug (same as `id`)
	Slug string `pulumi:"slug"`
	Version *string `pulumi:"version"`
}

