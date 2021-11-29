import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class DivColor
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private context: ComponentFramework.Context<IInputs>;
  private container: HTMLDivElement;
  private notifyOutputChanged: () => void;
  private buttonClickHandler: EventListener;

  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ) {
    this.context = context;
    this.notifyOutputChanged = notifyOutputChanged;
    this.container = container;
    this.buttonClickHandler = this.buttonClick.bind(this);

    // create input and div
    const colorInput = document.createElement("input");
    const divColor = document.createElement("div");
    divColor.setAttribute("id", "divColor");
    divColor.style.width = "20px";
    divColor.style.height = "20px";
    divColor.style.backgroundColor = "yellow";

    // Wrap the two above elements in a div to box out the content
    const messageContainer = document.createElement("div");
    messageContainer.appendChild(colorInput);
    messageContainer.appendChild(divColor);

    // Create the button element to switch color
    const button = document.createElement("button");
    button.textContent = "Change color";
    button.addEventListener("click", this.buttonClickHandler);

    // Add the message container and button to the overall control container
    this.container.appendChild(messageContainer);
    this.container.appendChild(button);
  }

  public buttonClick() {
    const colorInput = this.container.querySelector("input")!;
    const div = document.getElementById("divColor")!;
    div.style.backgroundColor = colorInput.value;
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
