using Confluent.Kafka;
using System.Text.Json;
using UserService.Events;

namespace UserService.Services;

public class KafkaProducerService
{
    private readonly ProducerConfig _config;

    public KafkaProducerService()
    {
        _config = new ProducerConfig
        {
            BootstrapServers = "localhost:9092"
        };
    }

    public async Task SendUserRegisteredEventAsync(UserRegisteredEvent userEvent)
    {
        using var producer =
            new ProducerBuilder<Null, string>(_config).Build();

        var message = JsonSerializer.Serialize(userEvent);

        await producer.ProduceAsync(
            "user-events",
            new Message<Null, string>
            {
                Value = message
            });
    }
}