// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Packet.Inputs
{

    public sealed class DevicePortArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Whether this port is part of a bond in bonded network setup
        /// * `project_id`- The ID of the project the device belongs to
        /// </summary>
        [Input("bonded")]
        public Input<bool>? Bonded { get; set; }

        /// <summary>
        /// ID of the port
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// MAC address assigned to the port
        /// </summary>
        [Input("mac")]
        public Input<string>? Mac { get; set; }

        /// <summary>
        /// Name of the port (e.g. `eth0`, or `bond0`)
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// One of [`private_ipv4`, `public_ipv4`, `public_ipv6`]
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public DevicePortArgs()
        {
        }
    }
}
