// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Packet
{
    public static partial class Invokes
    {
        /// <summary>
        /// Provides a Packet device datasource.
        /// 
        /// &gt; **Note:** All arguments including the `root_password` and `user_data` will be stored in
        ///  the raw state as plain-text.
        /// [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/d/device.html.markdown.
        /// </summary>
        public static Task<GetDeviceResult> GetDevice(GetDeviceArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDeviceResult>("packet:index/getDevice:getDevice", args, options.WithVersion());
    }

    public sealed class GetDeviceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Device ID
        /// </summary>
        [Input("deviceId")]
        public Input<string>? DeviceId { get; set; }

        /// <summary>
        /// The device name
        /// </summary>
        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        /// <summary>
        /// The id of the project in which the devices exists
        /// </summary>
        [Input("projectId")]
        public Input<string>? ProjectId { get; set; }

        public GetDeviceArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetDeviceResult
    {
        /// <summary>
        /// The ipv4 private IP assigned to the device
        /// </summary>
        public readonly string AccessPrivateIpv4;
        /// <summary>
        /// The ipv4 management IP assigned to the device
        /// </summary>
        public readonly string AccessPublicIpv4;
        /// <summary>
        /// The ipv6 management IP assigned to the device
        /// </summary>
        public readonly string AccessPublicIpv6;
        public readonly bool AlwaysPxe;
        /// <summary>
        /// The billing cycle of the device (monthly or hourly)
        /// </summary>
        public readonly string BillingCycle;
        /// <summary>
        /// Description string for the device
        /// </summary>
        public readonly string Description;
        public readonly string DeviceId;
        /// <summary>
        /// The facility where the device is deployed.
        /// </summary>
        public readonly string Facility;
        /// <summary>
        /// The id of hardware reservation which this device occupies
        /// </summary>
        public readonly string HardwareReservationId;
        public readonly string Hostname;
        public readonly string IpxeScriptUrl;
        /// <summary>
        /// The device's private and public IP (v4 and v6) network details. When a device is run without any special network configuration, it will have 3 networks: 
        /// * Public IPv4 at `packet_device.name.network.0`
        /// * IPv6 at `packet_device.name.network.1`
        /// * Private IPv4 at `packet_device.name.network.2`
        /// Elastic addresses then stack by type - an assigned public IPv4 will go after the management public IPv4 (to index 1), and will then shift the indices of the IPv6 and private IPv4. Assigned private IPv4 will go after the management private IPv4 (to the end of the network list).
        /// The fields of the network attributes are:
        /// </summary>
        public readonly ImmutableArray<Outputs.GetDeviceNetworksResult> Networks;
        /// <summary>
        /// L2 network type of the device, one of "layer3", "layer2-bonded", "layer2-individual", "hybrid"
        /// </summary>
        public readonly string NetworkType;
        /// <summary>
        /// The operating system running on the device
        /// </summary>
        public readonly string OperatingSystem;
        /// <summary>
        /// The hardware config of the device
        /// </summary>
        public readonly string Plan;
        /// <summary>
        /// Ports assigned to the device
        /// </summary>
        public readonly ImmutableArray<Outputs.GetDevicePortsResult> Ports;
        public readonly string ProjectId;
        public readonly int PublicIpv4SubnetSize;
        /// <summary>
        /// Root password to the server (if still available)
        /// </summary>
        public readonly string RootPassword;
        /// <summary>
        /// List of IDs of SSH keys deployed in the device, can be both user or project SSH keys
        /// </summary>
        public readonly ImmutableArray<string> SshKeyIds;
        /// <summary>
        /// The state of the device
        /// </summary>
        public readonly string State;
        public readonly string Storage;
        /// <summary>
        /// Tags attached to the device
        /// </summary>
        public readonly ImmutableArray<string> Tags;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetDeviceResult(
            string accessPrivateIpv4,
            string accessPublicIpv4,
            string accessPublicIpv6,
            bool alwaysPxe,
            string billingCycle,
            string description,
            string deviceId,
            string facility,
            string hardwareReservationId,
            string hostname,
            string ipxeScriptUrl,
            ImmutableArray<Outputs.GetDeviceNetworksResult> networks,
            string networkType,
            string operatingSystem,
            string plan,
            ImmutableArray<Outputs.GetDevicePortsResult> ports,
            string projectId,
            int publicIpv4SubnetSize,
            string rootPassword,
            ImmutableArray<string> sshKeyIds,
            string state,
            string storage,
            ImmutableArray<string> tags,
            string id)
        {
            AccessPrivateIpv4 = accessPrivateIpv4;
            AccessPublicIpv4 = accessPublicIpv4;
            AccessPublicIpv6 = accessPublicIpv6;
            AlwaysPxe = alwaysPxe;
            BillingCycle = billingCycle;
            Description = description;
            DeviceId = deviceId;
            Facility = facility;
            HardwareReservationId = hardwareReservationId;
            Hostname = hostname;
            IpxeScriptUrl = ipxeScriptUrl;
            Networks = networks;
            NetworkType = networkType;
            OperatingSystem = operatingSystem;
            Plan = plan;
            Ports = ports;
            ProjectId = projectId;
            PublicIpv4SubnetSize = publicIpv4SubnetSize;
            RootPassword = rootPassword;
            SshKeyIds = sshKeyIds;
            State = state;
            Storage = storage;
            Tags = tags;
            Id = id;
        }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class GetDeviceNetworksResult
    {
        /// <summary>
        /// IPv4 or IPv6 address string
        /// </summary>
        public readonly string Address;
        /// <summary>
        /// Bit length of the network mask of the address
        /// </summary>
        public readonly int Cidr;
        /// <summary>
        /// IP version - "4" or "6"
        /// </summary>
        public readonly int Family;
        /// <summary>
        /// Address of router
        /// </summary>
        public readonly string Gateway;
        /// <summary>
        /// Whether the address is routable from the Internet
        /// </summary>
        public readonly bool Public;

        [OutputConstructor]
        private GetDeviceNetworksResult(
            string address,
            int cidr,
            int family,
            string gateway,
            bool @public)
        {
            Address = address;
            Cidr = cidr;
            Family = family;
            Gateway = gateway;
            Public = @public;
        }
    }

    [OutputType]
    public sealed class GetDevicePortsResult
    {
        /// <summary>
        /// Whether this port is part of a bond in bonded network setup
        /// </summary>
        public readonly bool Bonded;
        /// <summary>
        /// ID of the port
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// MAC address assigned to the port
        /// </summary>
        public readonly string Mac;
        /// <summary>
        /// Name of the port (e.g. `eth0`, or `bond0`)
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Type of the port (e.g. `NetworkPort` or `NetworkBondPort`)
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDevicePortsResult(
            bool bonded,
            string id,
            string mac,
            string name,
            string type)
        {
            Bonded = bonded;
            Id = id;
            Mac = mac;
            Name = name;
            Type = type;
        }
    }
    }
}
