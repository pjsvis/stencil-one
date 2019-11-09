import { Component, Prop, h } from "@stencil/core";


@Component({
  tag: "star-rating",
  shadow: false // Set to false to get global styles
})
export class StarRatingComponent {
  color = "orange";
  // Indicate that name should be a public property on the component
  @Prop() rating: number;

  render() {
    return (
      <div>
        {Array.apply(null, Array(this.rating)).map((i: number) => (
          <span key={i} class="f3 orange">&#x2605;</span>
        ))}       
      </div>
    );
  }
}
