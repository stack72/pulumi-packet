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
        /// Use this data source to get Packet Spot Market Price.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/d/spot_market_price.html.markdown.
        /// </summary>
        public static Task<GetSpotMarketPriceResult> GetSpotMarketPrice(GetSpotMarketPriceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSpotMarketPriceResult>("packet:index/getSpotMarketPrice:getSpotMarketPrice", args, options.WithVersion());
    }

    public sealed class GetSpotMarketPriceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the facility.
        /// </summary>
        [Input("facility", required: true)]
        public Input<string> Facility { get; set; } = null!;

        /// <summary>
        /// Name of the plan.
        /// </summary>
        [Input("plan", required: true)]
        public Input<string> Plan { get; set; } = null!;

        public GetSpotMarketPriceArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetSpotMarketPriceResult
    {
        public readonly string Facility;
        public readonly string Plan;
        /// <summary>
        /// Current spot market price for given plan in given facility.
        /// </summary>
        public readonly double Price;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetSpotMarketPriceResult(
            string facility,
            string plan,
            double price,
            string id)
        {
            Facility = facility;
            Plan = plan;
            Price = price;
            Id = id;
        }
    }
}
