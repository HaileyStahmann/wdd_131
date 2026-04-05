
const plants = [
    {
        name: 'Snake Plant',
        scientific_name: '(Dracaena trifasciata)',
        image: 'images/photo_2024-11-09_18-10-45.jpg',
        description: 'The snake plant is a hardy, low-maintenance houseplant with long, upright leaves that are typically green with yellow or white edges.',
        light: 'Light: Snake plants can tolerate a range of lighting conditions, from bright, indirect light to low light. However, they thrive best in moderate to bright indirect light.',
        watering: 'Watering: Snake plants are drought-tolerant and prefer to dry out between waterings. Overwatering is a common mistake, so allow the soil to dry completely before watering again. During the winter, reduce watering.',
        temperature: 'Temperature: They prefer warmer temperatures 65°F-85°F (18°C-29°C) and should be kept away from cold drafts.',
        soil: 'Soil: Use well-draining, sandy soil. A cactus or succulent mix works well.',
        fertilizing: 'Fertilizing: Feed the plant with a balanced liquid fertilizer once during the growing season (spring to summer) but skip during the winter.',
        repotting: 'Repotting: Snake plants grow slowly and only need repotting every 2-3 years or when they outgrow their pot.',
    },
    {
        name: 'Lucky Bamboo',
        scientific_name: '(Dracaena sanderiana)',
        image: 'images/rsz_photo_2024-11-09_18-10-31.jpg',
        image_alt: 'Image of plant',
        description: 'A popular indoor plant known for its slender, green stems and association with good fortune in Feng Shui. It is not technically bamboo but a species of Dracaena, and it often grows in decorative arrangements with stones or water.',
        light: 'Light: Lucky bamboo prefers bright, indirect light but can also tolerate low light. Avoid direct sunlight, as it can scorch the leaves.',
        watering: 'Watering: It can grow in water or soil. If growing in water, change it every 1-2 weeks to keep it fresh. Use distilled or purified water, as chlorine in tap water can harm the plant. If in soil, keep the soil consistently moist but not soggy.',
        temperature: 'Temperature: Lucky bamboo thrives in temperatures between 65°F-95°F (18°C-35°C). Avoid placing it in cold drafts or near heaters.',
        soil: 'Soil: If grown in soil, use a well-draining potting mix. For water-growing, make sure the roots are submerged in the water at all times.',
        fertilizer: 'Fertilizing: Feed with a diluted liquid houseplant fertilizer once a month during the growing season (spring to summer).',
        repotting: '',
        pruning: 'Pruning: Trim the plant to shape it and remove any yellowing or dead leaves. If the stems start to outgrow their container, you can cut them and propagate them in water.',
    },
    {
        name: 'Aglaonema Zebra Feathers',
        scientific_name: '(Aglaonema Sp.)',
        image: 'images/photo_2024-11-09_18-10-53.jpg',
        image_alt: 'Image of plant',
        description: 'A striking variety of the Aglaonema plant, known for its attractive, patterned foliage. The leaves feature a mix of dark green with white or lighter green markings, resembling zebra stripes, giving it a unique and decorative appearance.',
        light: 'Light: Aglaonema Zebra Feathers thrive in moderate to bright, indirect light. It can tolerate low light but may grow slower and its variegation may diminish. Avoid direct sunlight, as it can scorch the leaves.',
        watering: 'Watering: This plant prefers to be kept evenly moist but not soggy. Water it when the top 1-2 inches of soil feel dry. Reduce watering in the winter when the plant is not actively growing. Always ensure the pot has good drainage to prevent root rot.',
        temperature: 'Temperature: It prefers warm conditions between 65°F-75°F (18°C-24°C). Keep it away from drafts, cold windows, or air conditioners.',
        soil: 'Soil: Use well-draining, slightly acidic soil, such as a standard potting mix with added perlite or sand for improved drainage.',
        fertilizer: 'Fertilizing: During the growing season (spring and summer), fertilize once a month with a balanced liquid fertilizer. Reduce or stop feeding in the fall and winter when the plant\'s growth slows.',
        repotting: '',
        pruning: 'Pruning: Trim away any yellow or damaged leaves to maintain its appearance. Pruning also encourages new growth.',
        humidity: 'The Zebra feathers plant prefers higher humidity levels but can adapt to average household humidity. If the air is dry, consider misting the leaves or using a humidifier.',
    },
    {
        name: 'Philippine Evergreen',
        scientific_name: '(Aglaonema commutatum)',
        image: 'images/photo_2024-11-09_18-10-56.jpg',
        image_alt: 'Image of plant',
        description: 'A popular tropical plant native to the Philippines, often known for its attractive, glossy leaves and vibrant patterns. It is part of the Aglaonema genus, known for its ornamental qualities and ease of care. The Philippine Evergreen typically features broad, lance-shaped leaves with varying shades of green, sometimes marked with silver or lighter spots.',
        light: 'Light: The Philippine Evergreen thrives in moderate to bright, indirect light. It can tolerate lower light conditions, though it may grow more slowly and lose some of its vibrant variegation. Avoid placing it in direct sunlight as it can scorch the leaves.',
        watering: 'Watering: Keep the soil evenly moist, but not soggy. Water the plant when the top 1-2 inches of soil feel dry to the touch. Be sure to empty any excess water from the saucer to prevent root rot. In winter, reduce watering as the plant\'s growth slows down.',
        temperature: 'Temperature: This plant prefers warm temperatures, ideally between 65°F-80°F (18°C-27°C). Avoid placing it in drafty areas, near cold windows, or in places with extreme temperature fluctuations.',
        soil: 'Soil: Use a well-draining potting mix, such as a standard houseplant mix with added perlite for good drainage. This helps prevent water from sitting in the soil, which can lead to root rot.',
        fertilizer: 'Fertilizing: During the growing season (spring to summer), feed the Philippine Evergreen monthly with a diluted, balanced liquid fertilizer. In the winter months, reduce or stop fertilizing as the plant is in a resting period.',
        repotting: '',
        pruning: 'Pruning: Trim away any yellowing or damaged leaves to keep the plant looking neat and encourage new growth. Regular cleaning of the leaves with a soft cloth will also help them stay glossy and free from dust.',
        humidity: 'Humidity: The Philippine Evergreen enjoys higher humidity, typical of its tropical origins. It can tolerate average indoor humidity, but for optimal health, increase humidity by misting the leaves, placing the plant on a pebble tray, or using a humidifier if needed.',
    },
    {
        name: 'Thimble Cactus',
        scientific_name: '(Mammillaria gracilis)',
        image: 'images/photo_2024-11-09_18-11-01.jpg',
        image_alt: 'Image of plant',
        description: 'Also known as the Powder Puff Cactus, this is a small, spherical cactus that is native to Mexico. It\'s famous for its delicate, white spines that give it a soft, fluffy appearance, resembling a thimble or a puffball.',
        light: 'Light: Thimble cacti prefer bright, direct sunlight. Aim for at least 4-6 hours of sun daily. Without enough light, the cactus may become elongated and lose its compact, rounded form.',
        watering: 'Watering: Like most cacti, the Thimble Cactus is drought-tolerant and does not need frequent watering. Water it thoroughly when the soil has completely dried out. During the growing season (spring and summer), water every 1-2 weeks, and reduce watering in the fall and winter when the plant is dormant.',
        temperature: 'Temperature: Thimble Cactus thrives in warm temperatures between 70°F-100°F (21°C-38°C). It can tolerate higher temperatures, but it\'s sensitive to cold and should be kept away from drafts or temperatures below 50°F (10°C).',
        soil: 'Soil: Use well-draining cactus or succulent mix to avoid waterlogging. You can also add sand or perlite to regular potting soil to improve drainage.',
        fertilizer: 'Fertilizing: Feed the cactus with a diluted, balanced fertilizer once a month during the growing season (spring and summer). Avoid fertilizing during the dormant winter months.',
        repotting: 'Thimble cacti have slow growth, so they don\'t require frequent repotting. Repot only when the plant outgrows its pot, typically every 2-3 years. Wear gloves or use tongs to handle the plant if necessary.',
        pruning: '',
        humidity: 'Humidity: Thimble cacti prefer low humidity levels, typical of desert environments. Keep them in a dry spot to prevent rot and fungal issues.',
    },
    {
        name: 'Peace Lily',
        scientific_name: '(Spathiphyllum)',
        image: 'images/photo_2024-11-09_18-11-08.jpg',
        image_alt: 'Image of plant',
        description: 'The Peace Lily, also known as Spath, is a popular indoor plant known for its elegant white blooms and glossy, dark green foliage. It\'s appreciated for its air-purifying qualities and its ability to thrive in low-light environments, making it a favorite among indoor plant enthusiasts.',
        light: 'Light: Peace lilies prefer bright, indirect light, but they can also tolerate low light conditions, making them great for indoor spaces with limited sunlight. However, in low light, they may not bloom as frequently.',
        watering: 'Watering: They like to be kept evenly moist. Water the plant when the top 1-2 inches of soil are dry to the touch. They will also show signs of under watering, like wilting, but can bounce back quickly once watered. Avoid letting the plant sit in standing water.',
        temperature: 'Temperature: These plants thrive in warm temperatures between 65°F-80°F (18°C-27°C). They prefer consistent warmth and should be kept away from cold drafts or sudden temperature changes.',
        soil: 'Soil: Use well-draining, peat-based soil. A general-purpose indoor potting mix works well for this plant.',
        fertilizer: 'Fertilizing: Feed with a balanced liquid fertilizer once a month during the growing season (spring and summer). Reduce fertilizing in the winter months when the plant\'s growth slows.',
        repotting: 'Repotting: These plants grow quickly and should be repotted every 1-2 years or when their roots outgrow the pot. Choose a slightly larger pot to allow for new growth.',
        humidity: 'Humidity: Peace lilies appreciate higher humidity levels. To keep the plant healthy, increase humidity by misting the leaves or placing the plant on a tray with pebbles and water. They can tolerate regular household humidity as well.',
    },
    {
        name: 'Spider Plant',
        scientific_name: '(Chlorophytum comosum)',
        image: 'images/photo_2024-11-09_18-11-05.jpg',
        image_alt: 'Image of plant',
        description: 'A popular and easy-to-care-for houseplant known for its long, arching green leaves with white or yellow stripes. It gets its name from the small, baby plantlets that dangle down from the long stems, resembling spiders.',
        light: 'Light: Spider plants thrive in bright, indirect light, but they can also tolerate lower light conditions. However, in low light, their growth may slow, and the variegation on the leaves may fade.',
        watering: 'Watering: They prefer to be kept slightly moist when planted in soil. Water the plant when the top 1-2 inches of soil are dry. Be careful not to overwater, as it can lead to root rot. Allow excess water to drain from the pot.',
        temperature: 'Temperature: Spider plants prefer moderate to warm temperatures between 60°F-75°F (15°C-24°C). Avoid placing them in cold drafts or near heating vents, as they are sensitive to sudden temperature changes.',
        soil: 'Soil: Use a well-draining potting mix, such as a standard indoor potting soil, which helps prevent water from sitting around the roots.',
        fertilizer: 'Fertilizing: Fertilize once a month during the growing season (spring and summer) with a balanced, water-soluble fertilizer. You can reduce feeding in the fall and winter when the plant\'s growth slows down.',
        repotting: 'Repotting: Spider plants should be repotted every 1-2 years, or when they become root-bound. Choose a pot that is 1-2 inches larger in diameter than the current one.',
        humidity: 'Humidity: Spider plants can tolerate a range of humidity levels, but they prefer moderate to high humidity. If your home is very dry, consider placing the plant on a tray with water and pebbles or using a humidifier.',
        pruning: 'Pruning: Regularly remove any dead or yellowing leaves to keep the plant looking tidy. If the plantlet "spiders" are getting too long, you can trim them back, or propagate them in water to create new plants.',
    },
    {
        name: 'Baby Rubber Plant',
        scientific_name: '(Peperomia obtusifolia)',
        image: 'images/photo_2024-11-09_18-10-49.jpg',
        image_alt: 'Image of plant',
        description: 'A compact, attractive indoor plant with thick, glossy, oval-shaped leaves that are typically green, but some varieties feature cream or yellow variegation.',
        light: 'Light: Baby Rubber Plants prefer bright, indirect light. While they can tolerate low light, they may become leggy and lose some of their vibrant coloration. Avoid direct sunlight, as it can scorch the leaves.',
        watering: 'Watering: This plant is drought-tolerant and prefers to dry out between waterings. Water it when the top 1-2 inches of soil feel dry. Be careful not to overwater, as this can lead to root rot. Always ensure the pot has good drainage.',
        temperature: 'Temperature: Baby Rubber Plants thrive in temperatures between 65°F-80°F (18°C-27°C). They prefer a warm, stable environment and should be kept away from drafts, air conditioners, and heaters.',
        soil: 'Soil: Use a well-draining potting mix, such as a standard indoor potting mix with added perlite for extra drainage. This will help prevent water from pooling around the roots.',
        fertilizer: 'Fertilizing: Fertilize the plant during the growing season (spring and summer) once a month with a balanced liquid fertilizer. Reduce or stop fertilizing during the fall and winter when the plant\'s growth slows.',
        repotting: 'Repotting: Baby Rubber Plants grow slowly, so they don\'t require frequent repotting. Repot every 1-2 years or when the plant becomes root-bound.',
        humidity: 'Humidity: Baby Rubber Plants prefer moderate to high humidity. While they can tolerate typical household humidity, they will thrive better in slightly higher humidity. You can increase humidity by misting the leaves or using a humidifier.',
        pruning: 'Pruning: You can trim the plant to maintain its shape or to remove any damaged or yellowing leaves. Pruning also encourages new growth and a bushier appearance.',
    },
]

const exhibit = document.querySelector('#exhibit');

function buildCareList(plant) {
    const items = [
        plant.light,
        plant.watering,
        plant.temperature,
        plant.soil,
        plant.fertilizer,
        plant.repotting,
        plant.humidity,
        plant.pruning
    ];

    return items
        .filter(item => item) // removes empty ones
        .map(item => `<li>${item}</li>`)
        .join('');
}

function getPlantTemplate(plant) {
    return `
    <div class="plant-card">
        <img src="${plant.image}" alt="${plant.image_alt}">
        <h1>${plant.name}</h1>
        <h2>${plant.scientific_name}</h2>
        <p>${plant.description}</p>

        <section class="toggle">
            <button class="toggle-btn">
            Care Tips <span class="arrow">▼</span>
            </button>
            <section class="dropdown-content">
                <ul>
                    ${buildCareList(plant)}
                </ul>
            </section>
        </section>
    </div>
  `;
}

function renderPlant(plant) {
    let html = getPlantTemplate(plant);
    exhibit.innerHTML += html;
}

function init() {
    plants.forEach(plant => {
        renderPlant(plant);
    });
}

init()

document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("open");
    });
});

