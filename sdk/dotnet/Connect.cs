// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Packet
{
    /// <summary>
    /// Provides a resource for [Packet Connect](https://www.packet.com/cloud/all-features/packet-connect/), a link between Packet VLANs and VLANs in other cloud providers.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/r/connect.html.markdown.
    /// </summary>
    public partial class Connect : Pulumi.CustomResource
    {
        /// <summary>
        /// Facility where to create the VLAN
        /// </summary>
        [Output("facility")]
        public Output<string> Facility { get; private set; } = null!;

        /// <summary>
        /// Name for the Connect resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Port speed in Mbps
        /// </summary>
        [Output("portSpeed")]
        public Output<int> PortSpeed { get; private set; } = null!;

        /// <summary>
        /// ID of parent project
        /// </summary>
        [Output("projectId")]
        public Output<string> ProjectId { get; private set; } = null!;

        /// <summary>
        /// ID of Connect Provider. Provider IDs are
        /// * Azure ExpressRoute - "ed5de8e0-77a9-4d3b-9de0-65281d3aa831"
        /// </summary>
        [Output("providerId")]
        public Output<string> ProviderId { get; private set; } = null!;

        /// <summary>
        /// Authorization key for the Connect provider
        /// </summary>
        [Output("providerPayload")]
        public Output<string> ProviderPayload { get; private set; } = null!;

        /// <summary>
        /// Status of the Connect resource, one of PROVISIONING, PROVISIONED, DEPROVISIONING, DEPROVISIONED
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// VXLAN Network identifier of the linked Packet VLAN
        /// </summary>
        [Output("vxlan")]
        public Output<int> Vxlan { get; private set; } = null!;


        /// <summary>
        /// Create a Connect resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Connect(string name, ConnectArgs args, CustomResourceOptions? options = null)
            : base("packet:index/connect:Connect", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Connect(string name, Input<string> id, ConnectState? state = null, CustomResourceOptions? options = null)
            : base("packet:index/connect:Connect", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Connect resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Connect Get(string name, Input<string> id, ConnectState? state = null, CustomResourceOptions? options = null)
        {
            return new Connect(name, id, state, options);
        }
    }

    public sealed class ConnectArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Facility where to create the VLAN
        /// </summary>
        [Input("facility", required: true)]
        public Input<string> Facility { get; set; } = null!;

        /// <summary>
        /// Name for the Connect resource
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Port speed in Mbps
        /// </summary>
        [Input("portSpeed", required: true)]
        public Input<int> PortSpeed { get; set; } = null!;

        /// <summary>
        /// ID of parent project
        /// </summary>
        [Input("projectId", required: true)]
        public Input<string> ProjectId { get; set; } = null!;

        /// <summary>
        /// ID of Connect Provider. Provider IDs are
        /// * Azure ExpressRoute - "ed5de8e0-77a9-4d3b-9de0-65281d3aa831"
        /// </summary>
        [Input("providerId", required: true)]
        public Input<string> ProviderId { get; set; } = null!;

        /// <summary>
        /// Authorization key for the Connect provider
        /// </summary>
        [Input("providerPayload", required: true)]
        public Input<string> ProviderPayload { get; set; } = null!;

        /// <summary>
        /// VXLAN Network identifier of the linked Packet VLAN
        /// </summary>
        [Input("vxlan", required: true)]
        public Input<int> Vxlan { get; set; } = null!;

        public ConnectArgs()
        {
        }
    }

    public sealed class ConnectState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Facility where to create the VLAN
        /// </summary>
        [Input("facility")]
        public Input<string>? Facility { get; set; }

        /// <summary>
        /// Name for the Connect resource
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Port speed in Mbps
        /// </summary>
        [Input("portSpeed")]
        public Input<int>? PortSpeed { get; set; }

        /// <summary>
        /// ID of parent project
        /// </summary>
        [Input("projectId")]
        public Input<string>? ProjectId { get; set; }

        /// <summary>
        /// ID of Connect Provider. Provider IDs are
        /// * Azure ExpressRoute - "ed5de8e0-77a9-4d3b-9de0-65281d3aa831"
        /// </summary>
        [Input("providerId")]
        public Input<string>? ProviderId { get; set; }

        /// <summary>
        /// Authorization key for the Connect provider
        /// </summary>
        [Input("providerPayload")]
        public Input<string>? ProviderPayload { get; set; }

        /// <summary>
        /// Status of the Connect resource, one of PROVISIONING, PROVISIONED, DEPROVISIONING, DEPROVISIONED
        /// </summary>
        [Input("status")]
        public Input<string>? Status { get; set; }

        /// <summary>
        /// VXLAN Network identifier of the linked Packet VLAN
        /// </summary>
        [Input("vxlan")]
        public Input<int>? Vxlan { get; set; }

        public ConnectState()
        {
        }
    }
}
