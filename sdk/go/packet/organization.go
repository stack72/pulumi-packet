// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package packet

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a resource to manage organization resource in Packet.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/r/organization.html.markdown.
type Organization struct {
	s *pulumi.ResourceState
}

// NewOrganization registers a new resource with the given unique name, arguments, and options.
func NewOrganization(ctx *pulumi.Context,
	name string, args *OrganizationArgs, opts ...pulumi.ResourceOpt) (*Organization, error) {
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["logo"] = nil
		inputs["name"] = nil
		inputs["twitter"] = nil
		inputs["website"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["logo"] = args.Logo
		inputs["name"] = args.Name
		inputs["twitter"] = args.Twitter
		inputs["website"] = args.Website
	}
	inputs["created"] = nil
	inputs["updated"] = nil
	s, err := ctx.RegisterResource("packet:index/organization:Organization", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Organization{s: s}, nil
}

// GetOrganization gets an existing Organization resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetOrganization(ctx *pulumi.Context,
	name string, id pulumi.ID, state *OrganizationState, opts ...pulumi.ResourceOpt) (*Organization, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["created"] = state.Created
		inputs["description"] = state.Description
		inputs["logo"] = state.Logo
		inputs["name"] = state.Name
		inputs["twitter"] = state.Twitter
		inputs["updated"] = state.Updated
		inputs["website"] = state.Website
	}
	s, err := ctx.ReadResource("packet:index/organization:Organization", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Organization{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Organization) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Organization) ID() pulumi.IDOutput {
	return r.s.ID()
}

func (r *Organization) Created() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["created"])
}

// Description string.
func (r *Organization) Description() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["description"])
}

// Logo URL.
func (r *Organization) Logo() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["logo"])
}

// The name of the Organization.
func (r *Organization) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// Twitter handle.
func (r *Organization) Twitter() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["twitter"])
}

func (r *Organization) Updated() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["updated"])
}

// Website link.
func (r *Organization) Website() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["website"])
}

// Input properties used for looking up and filtering Organization resources.
type OrganizationState struct {
	Created interface{}
	// Description string.
	Description interface{}
	// Logo URL.
	Logo interface{}
	// The name of the Organization.
	Name interface{}
	// Twitter handle.
	Twitter interface{}
	Updated interface{}
	// Website link.
	Website interface{}
}

// The set of arguments for constructing a Organization resource.
type OrganizationArgs struct {
	// Description string.
	Description interface{}
	// Logo URL.
	Logo interface{}
	// The name of the Organization.
	Name interface{}
	// Twitter handle.
	Twitter interface{}
	// Website link.
	Website interface{}
}
