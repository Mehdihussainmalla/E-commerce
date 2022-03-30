import {
    Text,
    View,
    StyleSheet,
    FlatList,
    VirtualizedList,
    Image,
    TouchableOpacity,
} from 'react-native';
import React from 'react';


const Listitems = () => {
    const splash = [{ key: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Jw4zQSxHtAKGtPALM-ghOpzdz0BgyGzjzQ&usqp=CAU' },
    {
        key: '2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRez5VUe7oQKGhaHWIzrVYVbAHHGYbRa6kcMw&usqp=CAU'
    },
    { key: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXZZBL2MumBtIwSNAYXDfDwdkaDK44rfQpLYj5BmcJrTSP2We2S2mNSMUHUmaGgxnh4I&usqp=CAU' },
    ]

    const names = [
        {
            key: '1',
            name: 'Women Lead',
            image:
                'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80',
            description: 'All kinds of leads',
        },
        {
            key: '2',
            name: 'Ladies & Gents',
            image:
                'https://www.seekpng.com/png/full/943-9431746_fashion-ecommerce-solutions-mannequin.png',
            description: 'All clothing related',
        },
        {
            key: '3',
            name: 'Beautiful Creations',
            image:
                'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg',
            description: `Create your own visual`,
        },
        {
            key: '4',
            name: 'Kids Wear',
            image:
                'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&w=1000&q=80',
            description: 'Fashion is the armor to survive the reality ',
        },
        {
            key: '5',
            name: 'Women Printed shades',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLIPyAJOehgYxxOG5-GxKvb6iSO8p9jEt9g&usqp=CAU',
            description: 'What normal people perceive beauty',
        },
        {
            key: '6',
            name: 'Men Suits',
            image:
                'https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?s=170667a',
            description: 'Fashion offered times a year',
        },
        {
            key: '7',
            name: "Men's Showroom",
            image:
                'https://thumbs.dreamstime.com/z/men-s-fashion-clothes-shop-21702063.jpg',
            description: 'In order to be irreplaceable one',
        },
        {
            key: '8',
            name: "Poly Cotton for Men's",
            image: 'https://m.media-amazon.com/images/I/61utFQXP8GL._AC_UL320_.jpg',
            description: 'Elegance is not standing',
        },
        {
            key: '9',
            name: 'mehdi',
            image:
                'https://cdn.pixabay.com/photo/2017/01/14/10/03/fashion-1979136__340.jpg',
            description: `Being well dressed `,
        },
        {
            key: '10',
            name: 'hussain',
            image:
                'https://public-files.gumroad.com/variants/88ayli12f8qqmqdzo51j9frz5yfe/086fe0ccf7daf594181e55addc374111404928c7b7566b9971b7b19152128f20',
            description: `Humor is a big part of style`,
        },
        {
            key: '11',
            name: 'malla',
            image:
                'https://img.favpng.com/13/15/8/online-shopping-retail-e-commerce-discounts-and-allowances-png-favpng-6LBLuzHPUuLdYp7MBJyHPGCfZ.jpg',
            description: `Dress shabbily rememberance`,
        },
        {
            key: '12',
            name: 'mehdi',
            image:
                'https://i0.wp.com/www.fashionrevolution.org/wp-content/uploads/2018/10/FR_FashionEnvironmentChange_WebThumb-scaled.jpg?resize=460%2C460&ssl=1',
            description: `Dress up your mind `,
        },
        {
            key: '13',
            name: 'mehdi',
            image:
                'https://i0.wp.com/hespokestyle.com/wp-content/uploads/2017/04/trad-ivy-style-clothes-with-style-magazine-ad-advertisement-history-mens-fashion-style.jpg?resize=800%2C533&ssl=1',
            description: `Fabulous clothes make beautiful `,
        },
        {
            key: '14',
            name: 'hussain',
            image:
                'https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863__340.jpg',
            description: `Fashion is style`,
        },
        {
            key: '15',
            name: 'malla',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlYQ5Wjxx4rxyTyi3rxdnc_8C41fFs9Jnyw&usqp=CAU',
            description: `all nightmare dress`,
        },
        {
            key: '16',
            name: 'Beautiful Creations',
            image:
                'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg',
            description: `Unique distinctive from others`,
        },
        {
            key: '17',
            name: 'malla',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlYQ5Wjxx4rxyTyi3rxdnc_8C41fFs9Jnyw&usqp=CAU',
            description: `all nightmare dress`,
        },
        {
            key: '18',
            name: 'Beautiful Creations',
            image:
                'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg',
            description: `Unique distinctive from others`,
        },
    ];

    return (
        <View>

            <FlatList
                style={{
                    marginBottom: 2, paddingTop: 5,
                    //flexDirection:'row'
                }}
                keyExtractor={key => {
                    return key.key;
                }}
                horizontal
                //numColumns={3}
                data={splash}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity>
                            <View style={styles.splashview}>
                                <Image style={styles.splash} source={{ uri: item.image }} />

                            </View>
                        </TouchableOpacity>

                    );
                }}
            />
            <FlatList
                style={{ marginBottom: 4, paddingTop: 5, }}
                keyExtractor={key => {
                    return key.key;
                }}
                numColumns={3}
                data={names}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <TouchableOpacity>
                                <View style={styles.layout}>
                                    <Image style={styles.images} source={{ uri: item.image }} />

                                    <Text style={styles.title}>{item.name}</Text>

                                    <Text style={styles.description}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        //justifyContent:'center',
        margin: 3,
        backgroundColor: '#ffff',
        //marginEnd:2,
        paddingTop: 1,
        marginBottom: 5,
        flexDirection: 'row',
        borderRadius: 8,
    },
    layout: {
       
        borderRadius: 5,
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ffff',

    },
    splashview: {

        flexDirection: 'row',
        height: 170,
        width: 390,
        borderBottomRightRadius: 10,
        justifyContent: 'space-between',


    },

    images: {
        height: 90,
        marginTop: 5,
        width: 100,

        marginLeft: 7,
        //justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    splash: {
        height: 170,
        width: '100%',
        borderEndWidth: 5,
        borderRadius: 10,
        borderStartWidth: 1,

    },
    title: {
        //margin:3,
        fontSize: 11,
        paddingBottom: 5,
        fontWeight: 'bold',
        //marginBottom:18,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },

    description: {
        //paddingTop: 2,
        marginBottom: 19,
        fontSize: 10,
        //margin:5,
        fontWeight: '300',
        justifyContent: 'center',
        textAlign: 'center',
    },
});

export default Listitems;
