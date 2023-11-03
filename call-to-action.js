const { registerBlockType } = wp.blocks;
const { TextControl, URLInputButton } = wp.editor;

registerBlockType('custom-gutenberg-block/cta', {
    title: 'Call to Action',
    icon: 'megaphone',
    category: 'common',
    attributes: {
        title: {
            type: 'string',
            default: 'Call to Action Title',
        },
        buttonText: {
            type: 'string',
            default: 'Learn More',
        },
        buttonURL: {
            type: 'string',
            default: '',
        },
    },
    edit: function(props) {
        const { attributes, setAttributes } = props;

        return (
            <div>
                <TextControl
                    label="Title"
                    value={attributes.title}
                    onChange={(value) => setAttributes({ title: value })}
                />
                <TextControl
                    label="Button Text"
                    value={attributes.buttonText}
                    onChange={(value) => setAttributes({ buttonText: value })}
                />
                <URLInputButton
                    label="Button URL"
                    url={attributes.buttonURL}
                    onChange={(value) => setAttributes({ buttonURL: value })}
                />
            </div>
        );
    },
    save: function(props) {
        const { attributes } = props;

        return (
            <div>
                <h2>{attributes.title}</h2>
                <a href={attributes.buttonURL} className="cta-button">
                    {attributes.buttonText}
                </a>
            </div>
        );
    },
});
