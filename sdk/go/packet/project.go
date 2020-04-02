// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package packet

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Packet project resource to allow you manage devices
// in your projects.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/r/project.html.markdown.
type Project struct {
	pulumi.CustomResourceState

	// Enable or disable [Backend Transfer](https://www.packet.com/developers/docs/network/basic/backend-transfer/), default is false
	BackendTransfer pulumi.BoolPtrOutput `pulumi:"backendTransfer"`
	// Optional BGP settings. Refer to [Packet guide for BGP](https://www.packet.com/developers/docs/network/advanced/local-and-global-bgp/).
	BgpConfig ProjectBgpConfigPtrOutput `pulumi:"bgpConfig"`
	// The timestamp for when the project was created
	Created pulumi.StringOutput `pulumi:"created"`
	// The name of the project
	Name pulumi.StringOutput `pulumi:"name"`
	// The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
	OrganizationId pulumi.StringOutput `pulumi:"organizationId"`
	// The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organizationId`, or default).
	PaymentMethodId pulumi.StringOutput `pulumi:"paymentMethodId"`
	// The timestamp for the last time the project was updated
	Updated pulumi.StringOutput `pulumi:"updated"`
}

// NewProject registers a new resource with the given unique name, arguments, and options.
func NewProject(ctx *pulumi.Context,
	name string, args *ProjectArgs, opts ...pulumi.ResourceOption) (*Project, error) {
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	if args == nil {
		args = &ProjectArgs{}
	}
	var resource Project
	err := ctx.RegisterResource("packet:index/project:Project", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProject gets an existing Project resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProject(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProjectState, opts ...pulumi.ResourceOption) (*Project, error) {
	var resource Project
	err := ctx.ReadResource("packet:index/project:Project", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Project resources.
type projectState struct {
	// Enable or disable [Backend Transfer](https://www.packet.com/developers/docs/network/basic/backend-transfer/), default is false
	BackendTransfer *bool `pulumi:"backendTransfer"`
	// Optional BGP settings. Refer to [Packet guide for BGP](https://www.packet.com/developers/docs/network/advanced/local-and-global-bgp/).
	BgpConfig *ProjectBgpConfig `pulumi:"bgpConfig"`
	// The timestamp for when the project was created
	Created *string `pulumi:"created"`
	// The name of the project
	Name *string `pulumi:"name"`
	// The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
	OrganizationId *string `pulumi:"organizationId"`
	// The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organizationId`, or default).
	PaymentMethodId *string `pulumi:"paymentMethodId"`
	// The timestamp for the last time the project was updated
	Updated *string `pulumi:"updated"`
}

type ProjectState struct {
	// Enable or disable [Backend Transfer](https://www.packet.com/developers/docs/network/basic/backend-transfer/), default is false
	BackendTransfer pulumi.BoolPtrInput
	// Optional BGP settings. Refer to [Packet guide for BGP](https://www.packet.com/developers/docs/network/advanced/local-and-global-bgp/).
	BgpConfig ProjectBgpConfigPtrInput
	// The timestamp for when the project was created
	Created pulumi.StringPtrInput
	// The name of the project
	Name pulumi.StringPtrInput
	// The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
	OrganizationId pulumi.StringPtrInput
	// The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organizationId`, or default).
	PaymentMethodId pulumi.StringPtrInput
	// The timestamp for the last time the project was updated
	Updated pulumi.StringPtrInput
}

func (ProjectState) ElementType() reflect.Type {
	return reflect.TypeOf((*projectState)(nil)).Elem()
}

type projectArgs struct {
	// Enable or disable [Backend Transfer](https://www.packet.com/developers/docs/network/basic/backend-transfer/), default is false
	BackendTransfer *bool `pulumi:"backendTransfer"`
	// Optional BGP settings. Refer to [Packet guide for BGP](https://www.packet.com/developers/docs/network/advanced/local-and-global-bgp/).
	BgpConfig *ProjectBgpConfig `pulumi:"bgpConfig"`
	// The name of the project
	Name string `pulumi:"name"`
	// The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
	OrganizationId *string `pulumi:"organizationId"`
	// The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organizationId`, or default).
	PaymentMethodId *string `pulumi:"paymentMethodId"`
}

// The set of arguments for constructing a Project resource.
type ProjectArgs struct {
	// Enable or disable [Backend Transfer](https://www.packet.com/developers/docs/network/basic/backend-transfer/), default is false
	BackendTransfer pulumi.BoolPtrInput
	// Optional BGP settings. Refer to [Packet guide for BGP](https://www.packet.com/developers/docs/network/advanced/local-and-global-bgp/).
	BgpConfig ProjectBgpConfigPtrInput
	// The name of the project
	Name pulumi.StringInput
	// The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
	OrganizationId pulumi.StringPtrInput
	// The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organizationId`, or default).
	PaymentMethodId pulumi.StringPtrInput
}

func (ProjectArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*projectArgs)(nil)).Elem()
}
