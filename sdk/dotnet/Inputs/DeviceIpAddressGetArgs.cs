// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Packet.Inputs
{

    public sealed class DeviceIpAddressGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// CIDR suffix for IP address block to be assigned, i.e. amount of addresses.
        /// </summary>
        [Input("cidr")]
        public Input<int>? Cidr { get; set; }

        [Input("reservationIds")]
        private InputList<string>? _reservationIds;
        public InputList<string> ReservationIds
        {
            get => _reservationIds ?? (_reservationIds = new InputList<string>());
            set => _reservationIds = value;
        }

        /// <summary>
        /// One of [`private_ipv4`, `public_ipv4`, `public_ipv6`]
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public DeviceIpAddressGetArgs()
        {
        }
    }
}