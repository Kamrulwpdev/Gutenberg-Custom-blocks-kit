const { registerBlockType } = wp.blocks;
const { MediaUpload, TextControl, RichText, URLInputButton, URLInput } = wp.editor;
const { Button, PanelBody, SelectControl } = wp.components;

registerBlockType('custom-gutenberg-block/hero-area', {
    title: 'Hero Area',
    icon: 'format-image',
    category: 'common',
    attributes: {
        title: {
            type: 'string',
            default: 'Hero Title',
        },
        description: {
            type: 'string',
            default: 'Hero Description',
        },
        imageURL: {
            type: 'string',
            default: '',
        },
        buttonText1: {
            type: 'string',
            default: 'Button 1',
        },
        buttonURL1: {
            type: 'string',
            default: '',
        },
        buttonText2: {
            type: 'string',
            default: 'Button 2',
        },
        buttonURL2: {
            type: 'string',
            default: '',
        },
        imageURL2: {
            type: 'string',
            default: '',
        },
    },
    edit: function(props) {
        const { attributes, setAttributes } = props;

        return (
            <div className="hero-area">
                <MediaUpload
                    onSelect={(media) => setAttributes({ imageURL: media.url })}
                    type="image"
                    render={({ open }) => (
                        <img
                            src={attributes.imageURL}
                            onClick={open}
                            alt=""
                            className="hero-image"
                        />
                    )}
                />
                <div className="hero-content">
                    <TextControl
                        label="Title"
                        value={attributes.title}
                        onChange={(value) => setAttributes({ title: value })}
                    />
                    <RichText
                        tagName="p"
                        placeholder="Hero Description"
                        value={attributes.description}
                        onChange={(value) => setAttributes({ description: value })}
                    />
                    <div className="hero-buttons">
                        <TextControl
                            label="Button 1 Text"
                            value={attributes.buttonText1}
                            onChange={(value) => setAttributes({ buttonText1: value })}
                        />
                        <URLInputButton
                            url={attributes.buttonURL1}
                            onChange={(value) => setAttributes({ buttonURL1: value })}
                        />
                        <TextControl
                            label="Button 2 Text"
                            value={attributes.buttonText2}
                            onChange={(value) => setAttributes({ buttonText2: value })}
                        />
                        <URLInputButton
                            url={attributes.buttonURL2}
                            onChange={(value) => setAttributes({ buttonURL2: value })}
                        />
                    </div>
                </div>
                <MediaUpload
                    onSelect={(media) => setAttributes({ imageURL2: media.url })}
                    type="image"
                    render={({ open }) => (
                        <img
                            src={attributes.imageURL2}
                            onClick={open}
                            alt=""
                            className="hero-image-2"
                        />
                    )}
                />
            </div>
        );
    },
    save: function(props) {
        const { attributes } = props;

        return (
            <div className="hero-area">
                <img src={attributes.imageURL} alt="" className="hero-image" />
                <div className="hero-content">
                    <h1>{attributes.title}</h1>
                    <p>{attributes.description}</p>
                    <div className="hero-buttons">
                        <a href={attributes.buttonURL1}>{attributes.buttonText1}</a>
                        <a href={attributes.buttonURL2}>{attributes.buttonText2}</a>
                    </div>
                </div>
                <img src={attributes.imageURL2} alt="" className="hero-image-2" />
            </div>
        );
    },
});
