// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package packet

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/r/volume.html.markdown.
type Volume struct {
	s *pulumi.ResourceState
}

// NewVolume registers a new resource with the given unique name, arguments, and options.
func NewVolume(ctx *pulumi.Context,
	name string, args *VolumeArgs, opts ...pulumi.ResourceOpt) (*Volume, error) {
	if args == nil || args.Facility == nil {
		return nil, errors.New("missing required argument 'Facility'")
	}
	if args == nil || args.Plan == nil {
		return nil, errors.New("missing required argument 'Plan'")
	}
	if args == nil || args.ProjectId == nil {
		return nil, errors.New("missing required argument 'ProjectId'")
	}
	if args == nil || args.Size == nil {
		return nil, errors.New("missing required argument 'Size'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["billingCycle"] = nil
		inputs["description"] = nil
		inputs["facility"] = nil
		inputs["locked"] = nil
		inputs["plan"] = nil
		inputs["projectId"] = nil
		inputs["size"] = nil
		inputs["snapshotPolicies"] = nil
	} else {
		inputs["billingCycle"] = args.BillingCycle
		inputs["description"] = args.Description
		inputs["facility"] = args.Facility
		inputs["locked"] = args.Locked
		inputs["plan"] = args.Plan
		inputs["projectId"] = args.ProjectId
		inputs["size"] = args.Size
		inputs["snapshotPolicies"] = args.SnapshotPolicies
	}
	inputs["attachments"] = nil
	inputs["created"] = nil
	inputs["name"] = nil
	inputs["state"] = nil
	inputs["updated"] = nil
	s, err := ctx.RegisterResource("packet:index/volume:Volume", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Volume{s: s}, nil
}

// GetVolume gets an existing Volume resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVolume(ctx *pulumi.Context,
	name string, id pulumi.ID, state *VolumeState, opts ...pulumi.ResourceOpt) (*Volume, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["attachments"] = state.Attachments
		inputs["billingCycle"] = state.BillingCycle
		inputs["created"] = state.Created
		inputs["description"] = state.Description
		inputs["facility"] = state.Facility
		inputs["locked"] = state.Locked
		inputs["name"] = state.Name
		inputs["plan"] = state.Plan
		inputs["projectId"] = state.ProjectId
		inputs["size"] = state.Size
		inputs["snapshotPolicies"] = state.SnapshotPolicies
		inputs["state"] = state.State
		inputs["updated"] = state.Updated
	}
	s, err := ctx.ReadResource("packet:index/volume:Volume", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Volume{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Volume) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Volume) ID() pulumi.IDOutput {
	return r.s.ID()
}

// A list of attachments, each with it's own `href` attribute
func (r *Volume) Attachments() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["attachments"])
}

// The billing cycle, defaults to "hourly"
func (r *Volume) BillingCycle() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["billingCycle"])
}

// The timestamp for when the volume was created
func (r *Volume) Created() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["created"])
}

// Optional description for the volume
func (r *Volume) Description() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["description"])
}

// The facility to create the volume in
func (r *Volume) Facility() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["facility"])
}

// Lock or unlock the volume
func (r *Volume) Locked() pulumi.BoolOutput {
	return (pulumi.BoolOutput)(r.s.State["locked"])
}

// The name of the volume
func (r *Volume) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// The service plan slug of the volume
func (r *Volume) Plan() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["plan"])
}

// The packet project ID to deploy the volume in
func (r *Volume) ProjectId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["projectId"])
}

// The size in GB to make the volume
func (r *Volume) Size() pulumi.IntOutput {
	return (pulumi.IntOutput)(r.s.State["size"])
}

// Optional list of snapshot policies
func (r *Volume) SnapshotPolicies() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["snapshotPolicies"])
}

// The state of the volume
func (r *Volume) State() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["state"])
}

// The timestamp for the last time the volume was updated
func (r *Volume) Updated() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["updated"])
}

// Input properties used for looking up and filtering Volume resources.
type VolumeState struct {
	// A list of attachments, each with it's own `href` attribute
	Attachments interface{}
	// The billing cycle, defaults to "hourly"
	BillingCycle interface{}
	// The timestamp for when the volume was created
	Created interface{}
	// Optional description for the volume
	Description interface{}
	// The facility to create the volume in
	Facility interface{}
	// Lock or unlock the volume
	Locked interface{}
	// The name of the volume
	Name interface{}
	// The service plan slug of the volume
	Plan interface{}
	// The packet project ID to deploy the volume in
	ProjectId interface{}
	// The size in GB to make the volume
	Size interface{}
	// Optional list of snapshot policies
	SnapshotPolicies interface{}
	// The state of the volume
	State interface{}
	// The timestamp for the last time the volume was updated
	Updated interface{}
}

// The set of arguments for constructing a Volume resource.
type VolumeArgs struct {
	// The billing cycle, defaults to "hourly"
	BillingCycle interface{}
	// Optional description for the volume
	Description interface{}
	// The facility to create the volume in
	Facility interface{}
	// Lock or unlock the volume
	Locked interface{}
	// The service plan slug of the volume
	Plan interface{}
	// The packet project ID to deploy the volume in
	ProjectId interface{}
	// The size in GB to make the volume
	Size interface{}
	// Optional list of snapshot policies
	SnapshotPolicies interface{}
}
