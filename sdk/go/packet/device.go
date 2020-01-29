// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package packet

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Packet device resource. This can be used to create,
// modify, and delete devices.
// 
// > **Note:** All arguments including the `rootPassword` and `userData` will be stored in
//  the raw state as plain-text.
// [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/r/device.html.markdown.
type Device struct {
	pulumi.CustomResourceState

	// The ipv4 private IP assigned to the device
	AccessPrivateIpv4 pulumi.StringOutput `pulumi:"accessPrivateIpv4"`
	// The ipv4 maintenance IP assigned to the device
	AccessPublicIpv4 pulumi.StringOutput `pulumi:"accessPublicIpv4"`
	// The ipv6 maintenance IP assigned to the device
	AccessPublicIpv6 pulumi.StringOutput `pulumi:"accessPublicIpv6"`
	// If true, a device with OS `customIpxe` will
	// continue to boot via iPXE on reboots.
	AlwaysPxe pulumi.BoolPtrOutput `pulumi:"alwaysPxe"`
	// monthly or hourly
	BillingCycle pulumi.StringOutput `pulumi:"billingCycle"`
	// The timestamp for when the device was created
	Created pulumi.StringOutput `pulumi:"created"`
	// The facility where the device is deployed.
	DeployedFacility pulumi.StringOutput `pulumi:"deployedFacility"`
	// Description string for the device
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// List of facility codes with deployment preferences. Packet API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or `any` (a wildcard). To find the facility code, visit [Facilities API docs](https://www.packet.com/developers/api/facilities), set your API auth token in the top of the page and see JSON from the API response.
	Facilities pulumi.StringArrayOutput `pulumi:"facilities"`
	// Delete device even if it has volumes attached. Only applies for destroy action.
	ForceDetachVolumes pulumi.BoolPtrOutput `pulumi:"forceDetachVolumes"`
	HardwareReservationId pulumi.StringOutput `pulumi:"hardwareReservationId"`
	// The device name
	Hostname pulumi.StringOutput `pulumi:"hostname"`
	// A set containing one or more of [`privateIpv4`, `publicIpv4`, `publicIpv6`]. It specifies which IP address types a new device should obtain. If omitted, a created device will obtain all 3 addresses. If you only want private IPv4 address for the new device, pass [`privateIpv4`].
	IpAddressTypes pulumi.StringArrayOutput `pulumi:"ipAddressTypes"`
	// URL pointing to a hosted iPXE script. More
	// information is in the
	// [Custom iPXE](https://www.packet.com/developers/docs/servers/operating-systems/custom-ipxe/)
	// doc.
	IpxeScriptUrl pulumi.StringPtrOutput `pulumi:"ipxeScriptUrl"`
	// Whether the device is locked
	Locked pulumi.BoolOutput `pulumi:"locked"`
	NetworkType pulumi.StringPtrOutput `pulumi:"networkType"`
	// The device's private and public IP (v4 and v6) network details. When a device is run without any special network configuration, it will have 3 networks: 
	// * Public IPv4 at `packet_device.name.network.0`
	// * IPv6 at `packet_device.name.network.1`
	// * Private IPv4 at `packet_device.name.network.2`
	// Elastic addresses then stack by type - an assigned public IPv4 will go after the management public IPv4 (to index 1), and will then shift the indices of the IPv6 and private IPv4. Assigned private IPv4 will go after the management private IPv4 (to the end of the network list).
	// The fields of the network attributes are:
	Networks DeviceNetworkArrayOutput `pulumi:"networks"`
	// The operating system slug. To find the slug, or visit [Operating Systems API docs](https://www.packet.com/developers/api/operatingsystems), set your API auth token in the top of the page and see JSON from the API response.
	OperatingSystem pulumi.StringOutput `pulumi:"operatingSystem"`
	// The device plan slug. To find the plan slug, visit [Device plans API docs](https://www.packet.com/developers/api/plans), set your auth token in the top of the page and see JSON from the API response.
	Plan pulumi.StringOutput `pulumi:"plan"`
	// Ports assigned to the device
	Ports DevicePortArrayOutput `pulumi:"ports"`
	// The ID of the project in which to create the device
	ProjectId pulumi.StringOutput `pulumi:"projectId"`
	// Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [.ProjectSshKey][packet_project_ssh_key.html] resource.
	ProjectSshKeyIds pulumi.StringArrayOutput `pulumi:"projectSshKeyIds"`
	// Size of allocated subnet, more
	// information is in the
	// [Custom Subnet Size](https://www.packet.com/developers/docs/servers/key-features/custom-subnet-size/) doc.
	PublicIpv4SubnetSize pulumi.IntOutput `pulumi:"publicIpv4SubnetSize"`
	// Root password to the server (disabled after 24 hours)
	RootPassword pulumi.StringOutput `pulumi:"rootPassword"`
	// List of IDs of SSH keys deployed in the device, can be both user and project SSH keys
	SshKeyIds pulumi.StringArrayOutput `pulumi:"sshKeyIds"`
	// The status of the device
	State pulumi.StringOutput `pulumi:"state"`
	// JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://www.packet.com/developers/docs/servers/key-features/cpr/) doc.
	Storage pulumi.StringPtrOutput `pulumi:"storage"`
	// Tags attached to the device
	Tags pulumi.StringArrayOutput `pulumi:"tags"`
	// The timestamp for the last time the device was updated
	Updated pulumi.StringOutput `pulumi:"updated"`
	// A string of the desired User Data for the device.
	UserData pulumi.StringPtrOutput `pulumi:"userData"`
	// Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware reservation is marked provisionable (about 4 minutes in August 2019).
	WaitForReservationDeprovision pulumi.BoolPtrOutput `pulumi:"waitForReservationDeprovision"`
}

// NewDevice registers a new resource with the given unique name, arguments, and options.
func NewDevice(ctx *pulumi.Context,
	name string, args *DeviceArgs, opts ...pulumi.ResourceOption) (*Device, error) {
	if args == nil || args.BillingCycle == nil {
		return nil, errors.New("missing required argument 'BillingCycle'")
	}
	if args == nil || args.Facilities == nil {
		return nil, errors.New("missing required argument 'Facilities'")
	}
	if args == nil || args.Hostname == nil {
		return nil, errors.New("missing required argument 'Hostname'")
	}
	if args == nil || args.OperatingSystem == nil {
		return nil, errors.New("missing required argument 'OperatingSystem'")
	}
	if args == nil || args.Plan == nil {
		return nil, errors.New("missing required argument 'Plan'")
	}
	if args == nil || args.ProjectId == nil {
		return nil, errors.New("missing required argument 'ProjectId'")
	}
	if args == nil {
		args = &DeviceArgs{}
	}
	var resource Device
	err := ctx.RegisterResource("packet:index/device:Device", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDevice gets an existing Device resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDevice(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DeviceState, opts ...pulumi.ResourceOption) (*Device, error) {
	var resource Device
	err := ctx.ReadResource("packet:index/device:Device", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Device resources.
type deviceState struct {
	// The ipv4 private IP assigned to the device
	AccessPrivateIpv4 *string `pulumi:"accessPrivateIpv4"`
	// The ipv4 maintenance IP assigned to the device
	AccessPublicIpv4 *string `pulumi:"accessPublicIpv4"`
	// The ipv6 maintenance IP assigned to the device
	AccessPublicIpv6 *string `pulumi:"accessPublicIpv6"`
	// If true, a device with OS `customIpxe` will
	// continue to boot via iPXE on reboots.
	AlwaysPxe *bool `pulumi:"alwaysPxe"`
	// monthly or hourly
	BillingCycle *string `pulumi:"billingCycle"`
	// The timestamp for when the device was created
	Created *string `pulumi:"created"`
	// The facility where the device is deployed.
	DeployedFacility *string `pulumi:"deployedFacility"`
	// Description string for the device
	Description *string `pulumi:"description"`
	// List of facility codes with deployment preferences. Packet API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or `any` (a wildcard). To find the facility code, visit [Facilities API docs](https://www.packet.com/developers/api/facilities), set your API auth token in the top of the page and see JSON from the API response.
	Facilities []string `pulumi:"facilities"`
	// Delete device even if it has volumes attached. Only applies for destroy action.
	ForceDetachVolumes *bool `pulumi:"forceDetachVolumes"`
	HardwareReservationId *string `pulumi:"hardwareReservationId"`
	// The device name
	Hostname *string `pulumi:"hostname"`
	// A set containing one or more of [`privateIpv4`, `publicIpv4`, `publicIpv6`]. It specifies which IP address types a new device should obtain. If omitted, a created device will obtain all 3 addresses. If you only want private IPv4 address for the new device, pass [`privateIpv4`].
	IpAddressTypes []string `pulumi:"ipAddressTypes"`
	// URL pointing to a hosted iPXE script. More
	// information is in the
	// [Custom iPXE](https://www.packet.com/developers/docs/servers/operating-systems/custom-ipxe/)
	// doc.
	IpxeScriptUrl *string `pulumi:"ipxeScriptUrl"`
	// Whether the device is locked
	Locked *bool `pulumi:"locked"`
	NetworkType *string `pulumi:"networkType"`
	// The device's private and public IP (v4 and v6) network details. When a device is run without any special network configuration, it will have 3 networks: 
	// * Public IPv4 at `packet_device.name.network.0`
	// * IPv6 at `packet_device.name.network.1`
	// * Private IPv4 at `packet_device.name.network.2`
	// Elastic addresses then stack by type - an assigned public IPv4 will go after the management public IPv4 (to index 1), and will then shift the indices of the IPv6 and private IPv4. Assigned private IPv4 will go after the management private IPv4 (to the end of the network list).
	// The fields of the network attributes are:
	Networks []DeviceNetwork `pulumi:"networks"`
	// The operating system slug. To find the slug, or visit [Operating Systems API docs](https://www.packet.com/developers/api/operatingsystems), set your API auth token in the top of the page and see JSON from the API response.
	OperatingSystem *string `pulumi:"operatingSystem"`
	// The device plan slug. To find the plan slug, visit [Device plans API docs](https://www.packet.com/developers/api/plans), set your auth token in the top of the page and see JSON from the API response.
	Plan *string `pulumi:"plan"`
	// Ports assigned to the device
	Ports []DevicePort `pulumi:"ports"`
	// The ID of the project in which to create the device
	ProjectId *string `pulumi:"projectId"`
	// Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [.ProjectSshKey][packet_project_ssh_key.html] resource.
	ProjectSshKeyIds []string `pulumi:"projectSshKeyIds"`
	// Size of allocated subnet, more
	// information is in the
	// [Custom Subnet Size](https://www.packet.com/developers/docs/servers/key-features/custom-subnet-size/) doc.
	PublicIpv4SubnetSize *int `pulumi:"publicIpv4SubnetSize"`
	// Root password to the server (disabled after 24 hours)
	RootPassword *string `pulumi:"rootPassword"`
	// List of IDs of SSH keys deployed in the device, can be both user and project SSH keys
	SshKeyIds []string `pulumi:"sshKeyIds"`
	// The status of the device
	State *string `pulumi:"state"`
	// JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://www.packet.com/developers/docs/servers/key-features/cpr/) doc.
	Storage *string `pulumi:"storage"`
	// Tags attached to the device
	Tags []string `pulumi:"tags"`
	// The timestamp for the last time the device was updated
	Updated *string `pulumi:"updated"`
	// A string of the desired User Data for the device.
	UserData *string `pulumi:"userData"`
	// Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware reservation is marked provisionable (about 4 minutes in August 2019).
	WaitForReservationDeprovision *bool `pulumi:"waitForReservationDeprovision"`
}

type DeviceState struct {
	// The ipv4 private IP assigned to the device
	AccessPrivateIpv4 pulumi.StringPtrInput
	// The ipv4 maintenance IP assigned to the device
	AccessPublicIpv4 pulumi.StringPtrInput
	// The ipv6 maintenance IP assigned to the device
	AccessPublicIpv6 pulumi.StringPtrInput
	// If true, a device with OS `customIpxe` will
	// continue to boot via iPXE on reboots.
	AlwaysPxe pulumi.BoolPtrInput
	// monthly or hourly
	BillingCycle pulumi.StringPtrInput
	// The timestamp for when the device was created
	Created pulumi.StringPtrInput
	// The facility where the device is deployed.
	DeployedFacility pulumi.StringPtrInput
	// Description string for the device
	Description pulumi.StringPtrInput
	// List of facility codes with deployment preferences. Packet API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or `any` (a wildcard). To find the facility code, visit [Facilities API docs](https://www.packet.com/developers/api/facilities), set your API auth token in the top of the page and see JSON from the API response.
	Facilities pulumi.StringArrayInput
	// Delete device even if it has volumes attached. Only applies for destroy action.
	ForceDetachVolumes pulumi.BoolPtrInput
	HardwareReservationId pulumi.StringPtrInput
	// The device name
	Hostname pulumi.StringPtrInput
	// A set containing one or more of [`privateIpv4`, `publicIpv4`, `publicIpv6`]. It specifies which IP address types a new device should obtain. If omitted, a created device will obtain all 3 addresses. If you only want private IPv4 address for the new device, pass [`privateIpv4`].
	IpAddressTypes pulumi.StringArrayInput
	// URL pointing to a hosted iPXE script. More
	// information is in the
	// [Custom iPXE](https://www.packet.com/developers/docs/servers/operating-systems/custom-ipxe/)
	// doc.
	IpxeScriptUrl pulumi.StringPtrInput
	// Whether the device is locked
	Locked pulumi.BoolPtrInput
	NetworkType pulumi.StringPtrInput
	// The device's private and public IP (v4 and v6) network details. When a device is run without any special network configuration, it will have 3 networks: 
	// * Public IPv4 at `packet_device.name.network.0`
	// * IPv6 at `packet_device.name.network.1`
	// * Private IPv4 at `packet_device.name.network.2`
	// Elastic addresses then stack by type - an assigned public IPv4 will go after the management public IPv4 (to index 1), and will then shift the indices of the IPv6 and private IPv4. Assigned private IPv4 will go after the management private IPv4 (to the end of the network list).
	// The fields of the network attributes are:
	Networks DeviceNetworkArrayInput
	// The operating system slug. To find the slug, or visit [Operating Systems API docs](https://www.packet.com/developers/api/operatingsystems), set your API auth token in the top of the page and see JSON from the API response.
	OperatingSystem pulumi.StringPtrInput
	// The device plan slug. To find the plan slug, visit [Device plans API docs](https://www.packet.com/developers/api/plans), set your auth token in the top of the page and see JSON from the API response.
	Plan pulumi.StringPtrInput
	// Ports assigned to the device
	Ports DevicePortArrayInput
	// The ID of the project in which to create the device
	ProjectId pulumi.StringPtrInput
	// Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [.ProjectSshKey][packet_project_ssh_key.html] resource.
	ProjectSshKeyIds pulumi.StringArrayInput
	// Size of allocated subnet, more
	// information is in the
	// [Custom Subnet Size](https://www.packet.com/developers/docs/servers/key-features/custom-subnet-size/) doc.
	PublicIpv4SubnetSize pulumi.IntPtrInput
	// Root password to the server (disabled after 24 hours)
	RootPassword pulumi.StringPtrInput
	// List of IDs of SSH keys deployed in the device, can be both user and project SSH keys
	SshKeyIds pulumi.StringArrayInput
	// The status of the device
	State pulumi.StringPtrInput
	// JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://www.packet.com/developers/docs/servers/key-features/cpr/) doc.
	Storage pulumi.StringPtrInput
	// Tags attached to the device
	Tags pulumi.StringArrayInput
	// The timestamp for the last time the device was updated
	Updated pulumi.StringPtrInput
	// A string of the desired User Data for the device.
	UserData pulumi.StringPtrInput
	// Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware reservation is marked provisionable (about 4 minutes in August 2019).
	WaitForReservationDeprovision pulumi.BoolPtrInput
}

func (DeviceState) ElementType() reflect.Type {
	return reflect.TypeOf((*deviceState)(nil)).Elem()
}

type deviceArgs struct {
	// If true, a device with OS `customIpxe` will
	// continue to boot via iPXE on reboots.
	AlwaysPxe *bool `pulumi:"alwaysPxe"`
	// monthly or hourly
	BillingCycle string `pulumi:"billingCycle"`
	// Description string for the device
	Description *string `pulumi:"description"`
	// List of facility codes with deployment preferences. Packet API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or `any` (a wildcard). To find the facility code, visit [Facilities API docs](https://www.packet.com/developers/api/facilities), set your API auth token in the top of the page and see JSON from the API response.
	Facilities []string `pulumi:"facilities"`
	// Delete device even if it has volumes attached. Only applies for destroy action.
	ForceDetachVolumes *bool `pulumi:"forceDetachVolumes"`
	HardwareReservationId *string `pulumi:"hardwareReservationId"`
	// The device name
	Hostname string `pulumi:"hostname"`
	// A set containing one or more of [`privateIpv4`, `publicIpv4`, `publicIpv6`]. It specifies which IP address types a new device should obtain. If omitted, a created device will obtain all 3 addresses. If you only want private IPv4 address for the new device, pass [`privateIpv4`].
	IpAddressTypes []string `pulumi:"ipAddressTypes"`
	// URL pointing to a hosted iPXE script. More
	// information is in the
	// [Custom iPXE](https://www.packet.com/developers/docs/servers/operating-systems/custom-ipxe/)
	// doc.
	IpxeScriptUrl *string `pulumi:"ipxeScriptUrl"`
	NetworkType *string `pulumi:"networkType"`
	// The operating system slug. To find the slug, or visit [Operating Systems API docs](https://www.packet.com/developers/api/operatingsystems), set your API auth token in the top of the page and see JSON from the API response.
	OperatingSystem string `pulumi:"operatingSystem"`
	// The device plan slug. To find the plan slug, visit [Device plans API docs](https://www.packet.com/developers/api/plans), set your auth token in the top of the page and see JSON from the API response.
	Plan string `pulumi:"plan"`
	// The ID of the project in which to create the device
	ProjectId string `pulumi:"projectId"`
	// Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [.ProjectSshKey][packet_project_ssh_key.html] resource.
	ProjectSshKeyIds []string `pulumi:"projectSshKeyIds"`
	// Size of allocated subnet, more
	// information is in the
	// [Custom Subnet Size](https://www.packet.com/developers/docs/servers/key-features/custom-subnet-size/) doc.
	PublicIpv4SubnetSize *int `pulumi:"publicIpv4SubnetSize"`
	// JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://www.packet.com/developers/docs/servers/key-features/cpr/) doc.
	Storage *string `pulumi:"storage"`
	// Tags attached to the device
	Tags []string `pulumi:"tags"`
	// A string of the desired User Data for the device.
	UserData *string `pulumi:"userData"`
	// Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware reservation is marked provisionable (about 4 minutes in August 2019).
	WaitForReservationDeprovision *bool `pulumi:"waitForReservationDeprovision"`
}

// The set of arguments for constructing a Device resource.
type DeviceArgs struct {
	// If true, a device with OS `customIpxe` will
	// continue to boot via iPXE on reboots.
	AlwaysPxe pulumi.BoolPtrInput
	// monthly or hourly
	BillingCycle pulumi.StringInput
	// Description string for the device
	Description pulumi.StringPtrInput
	// List of facility codes with deployment preferences. Packet API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or `any` (a wildcard). To find the facility code, visit [Facilities API docs](https://www.packet.com/developers/api/facilities), set your API auth token in the top of the page and see JSON from the API response.
	Facilities pulumi.StringArrayInput
	// Delete device even if it has volumes attached. Only applies for destroy action.
	ForceDetachVolumes pulumi.BoolPtrInput
	HardwareReservationId pulumi.StringPtrInput
	// The device name
	Hostname pulumi.StringInput
	// A set containing one or more of [`privateIpv4`, `publicIpv4`, `publicIpv6`]. It specifies which IP address types a new device should obtain. If omitted, a created device will obtain all 3 addresses. If you only want private IPv4 address for the new device, pass [`privateIpv4`].
	IpAddressTypes pulumi.StringArrayInput
	// URL pointing to a hosted iPXE script. More
	// information is in the
	// [Custom iPXE](https://www.packet.com/developers/docs/servers/operating-systems/custom-ipxe/)
	// doc.
	IpxeScriptUrl pulumi.StringPtrInput
	NetworkType pulumi.StringPtrInput
	// The operating system slug. To find the slug, or visit [Operating Systems API docs](https://www.packet.com/developers/api/operatingsystems), set your API auth token in the top of the page and see JSON from the API response.
	OperatingSystem pulumi.StringInput
	// The device plan slug. To find the plan slug, visit [Device plans API docs](https://www.packet.com/developers/api/plans), set your auth token in the top of the page and see JSON from the API response.
	Plan pulumi.StringInput
	// The ID of the project in which to create the device
	ProjectId pulumi.StringInput
	// Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [.ProjectSshKey][packet_project_ssh_key.html] resource.
	ProjectSshKeyIds pulumi.StringArrayInput
	// Size of allocated subnet, more
	// information is in the
	// [Custom Subnet Size](https://www.packet.com/developers/docs/servers/key-features/custom-subnet-size/) doc.
	PublicIpv4SubnetSize pulumi.IntPtrInput
	// JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://www.packet.com/developers/docs/servers/key-features/cpr/) doc.
	Storage pulumi.StringPtrInput
	// Tags attached to the device
	Tags pulumi.StringArrayInput
	// A string of the desired User Data for the device.
	UserData pulumi.StringPtrInput
	// Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware reservation is marked provisionable (about 4 minutes in August 2019).
	WaitForReservationDeprovision pulumi.BoolPtrInput
}

func (DeviceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*deviceArgs)(nil)).Elem()
}

