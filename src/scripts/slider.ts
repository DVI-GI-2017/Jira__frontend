export default class Slider {
  private static index: number = 1;

  public static start() {
    Slider.index = 1;
    Slider.showDiv(Slider.index);
  }

  public static increment(number: number) {
    Slider.showDiv(Slider.index += number);
  }

  private static showDiv(number: number) {
    const element: any = document.getElementsByClassName('mySlides');

    if (number > element.length) {
      Slider.index = 1;
    }

    if (number < 1) {
      Slider.index = element.length;
    }

    for (let i = 0; i < element.length; ++i) {
      element[i].style.display = 'none';
    }

    element[Slider.index - 1].style.display = 'block';
  }
}
