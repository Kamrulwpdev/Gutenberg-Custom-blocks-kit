const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, InspectorControls, URLInputButton } = wp.editor;
const { PanelBody, Button } = wp.components;

registerBlockType('Gutenberg-block-kits/promo-section', {
  title: 'Promo Section',
  icon: 'megaphone',
  category: 'common',
  attributes: {
    image: {
      type: 'string',
      default: '',
    },
    title: {
      type: 'string',
      default: 'Promo Title',
    },
    description: {
      type: 'string',
      default: 'Promo Description',
    },
    buttonText1: {
      type: 'string',
      default: 'Button 1',
    },
    buttonLink1: {
      type: 'string',
      default: '',
    },
    buttonText2: {
      type: 'string',
      default: 'Button 2',
    },
    buttonLink2: {
      type: 'string',
      default: '',
    },
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;

    const onSelectImage = (image) => {
      setAttributes({ image: image.url });
    };

    return (
      <div className={props.className}>
        <MediaUpload
          onSelect={onSelectImage}
          type="image"
          value={attributes.image}
          render={({ open }) => (
            <Button onClick={open}>Select Image</Button>
          )}
        />
        <div>
          <RichText
            tagName="h3"
            value={attributes.title}
            onChange={(title) => setAttributes({ title })}
            placeholder="Promo Title"
          />
          <RichText
            tagName="p"
            value={attributes.description}
            onChange={(description) => setAttributes({ description })}
            placeholder="Promo Description"
          />
          <RichText
            tagName="a"
            value={attributes.buttonText1}
            onChange={(buttonText1) => setAttributes({ buttonText1 })}
            placeholder="Button 1 Text"
          />
          <URLInputButton
            url={attributes.buttonLink1}
            onChange={(buttonLink1) => setAttributes({ buttonLink1 })}
          />
          <RichText
            tagName="a"
            value={attributes.buttonText2}
            onChange={(buttonText2) => setAttributes({ buttonText2 })}
            placeholder="Button 2 Text"
          />
          <URLInputButton
            url={attributes.buttonLink2}
            onChange={(buttonLink2) => setAttributes({ buttonLink2 })}
          />
        </div>
      </div>
    );
  },
  save: function (props) {
    return (
      <div className={props.className}>
        <img src={props.attributes.image} alt={props.attributes.title} />
        <h3>{props.attributes.title}</h3>
        <p>{props.attributes.description}</p>
        <a href={props.attributes.buttonLink1} className="button1">
          {props.attributes.buttonText1}
        </a>
        <a href={props.attributes.buttonLink2} className="button2">
          {props.attributes.buttonText2}
        </a>
      </div>
    );
  },
});
